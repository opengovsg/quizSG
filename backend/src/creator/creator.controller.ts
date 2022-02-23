import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  Get,
  InternalServerErrorException,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common'
import { Response } from 'express'
import { OptionService } from 'option/option.service'
import { QuestionService } from 'question/question.service'
import { QuizService } from 'quiz/quiz.service'
import { UserService } from 'user/user.service'
import {
  CreateQuizRequestDto,
  CreateQuizResponseDto,
} from './dto/create-quiz.dto'
import { CreateOptionDB } from 'option/dto/create-option.dto'
import { IsQuizIdPresentValidator } from 'helpers'
import { GetQuizWithSubmissionsResponseDto } from './dto/get-quiz-with-submissions.dto'

@Controller('creator')
export class CreatorController {
  constructor(
    private readonly userService: UserService,
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService
  ) {}

  @Post('quiz')
  async create(
    @Res() res: Response,
    @Body() createQuizDto: CreateQuizRequestDto
  ): Promise<void> {
    // TODO: to refactor when there are more than 1 admin user
    const admin = await this.userService.getFirst()
    if (!admin) throw new InternalServerErrorException('Admin user not present')

    // 1. Add row to Quiz table
    const quiz = await this.quizService.createQuiz(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      admin!.id,
      createQuizDto.name,
      createQuizDto.passingPercent,
      createQuizDto.description,
      createQuizDto.organisation
    )

    // 2. Add row(s) to Question table
    const questions = await this.questionService.bulkCreate(
      createQuizDto.questions.map((fullQuestionData) => {
        return {
          quizId: quiz.id,
          ...fullQuestionData,
        }
      })
    )

    // 3. Add row(s) to Option table
    const createOptionArr = createQuizDto.questions.reduce(
      (acc, fullQuestionData, idx) => {
        const optionsAppendedWithQuestionid = fullQuestionData.options.map(
          (option) => {
            return {
              ...option,
              questionId: questions[idx].id, // to grab questionId from returned quiz array from db
            } as CreateOptionDB
          }
        )
        acc = [...acc, ...optionsAppendedWithQuestionid]
        return acc
      },
      [] as CreateOptionDB[]
    )
    const options = await this.optionService.bulkCreate(createOptionArr)

    // 4. Forming response wrapped with ids returned from DB
    const response: CreateQuizResponseDto = this.quizService.formQuizResponse(
      quiz,
      questions,
      options
    )

    res.status(HttpStatus.CREATED).json(response)
  }

  @Get('quizzes')
  async getAll(@Res() res: Response): Promise<void> {
    // TODO: to refactor when there are more than 1 admin user
    const admin = await this.userService.getFirst()
    if (!admin) throw new InternalServerErrorException('Admin user not present')
    const quizzes = await this.quizService.getAllFromCreator(admin.id)
    res.status(HttpStatus.OK).json(quizzes)
  }

  @Get('quiz/:id')
  async get(
    @Res() res: Response,
    @Param() { id: quizId }: IsQuizIdPresentValidator
  ): Promise<void> {
    // TODO: to refactor when there are more than 1 admin user
    const admin = await this.userService.getFirst()
    if (!admin) throw new InternalServerErrorException('Admin user not present')
    const quiz = await this.quizService.getQuiz(quizId)
    if (!quiz) throw new NotFoundException()

    const numAttempts = quiz.submissions.length
    const avgScore =
      quiz.submissions.reduce(
        (acc, submission) => acc + submission.scorePercent,
        0
      ) / numAttempts

    const response: GetQuizWithSubmissionsResponseDto = {
      ...quiz.get({ plain: true }),
      numAttempts,
      avgScore,
    }

    res.status(HttpStatus.OK).json(response)
  }

  @Delete('quiz/:id')
  async deleteOne(
    @Res() res: Response,
    @Param() { id: quizId }: IsQuizIdPresentValidator
  ): Promise<void> {
    // TODO: to refactor when there are more than 1 admin user
    const admin = await this.userService.getFirst()
    if (!admin) throw new InternalServerErrorException('Admin user not present')
    const numDeleted = await this.quizService.deleteOnQuizId(quizId, admin.id)
    // TODO: to separate out 403 and 404 errors
    if (numDeleted === 0) throw new NotFoundException()
    res.status(HttpStatus.NO_CONTENT).send()
  }
}
