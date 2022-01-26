import {
  Controller,
  HttpStatus,
  Res,
  Get,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Response } from 'express'
import { OptionService } from 'option/option.service'
import { QuestionService } from 'question/question.service'
import { QuizService } from 'quiz/quiz.service'
import { UserService } from 'user/user.service'
import { IsNumberStringValidator } from 'helpers/isNumberStringValidator'

@Controller('')
export class TakerController {
  constructor(
    private readonly userService: UserService,
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService
  ) {}

  @Get('quiz/:id/attempt')
  async getAll(
    @Res() res: Response,
    @Param() param: IsNumberStringValidator
  ): Promise<void> {
    const admin = await this.userService.getFirst()
    if (!admin) throw new InternalServerErrorException('Admin user not present')
    const quiz = await this.quizService.getQuiz(param.id)

    if (!quiz) throw new NotFoundException()
    res
      .status(HttpStatus.OK)
      .json(this.quizService.formQuizAttemptResponse(quiz))
  }
}
