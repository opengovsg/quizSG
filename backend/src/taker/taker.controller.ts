import {
  Controller,
  HttpStatus,
  Res,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { Response } from 'express'
import { QuizService } from 'quiz/quiz.service'
import { IsNumberStringValidator } from 'helpers/isNumberStringValidator'
import { SubmissionDto } from './dto/submit-quiz.dto'
import { TakerService } from './taker.service'

@Controller('')
export class TakerController {
  constructor(
    private readonly quizService: QuizService,
    private readonly takerService: TakerService
  ) {}

  @Get('quiz/:id/attempt')
  async getAll(
    @Res() res: Response,
    @Param() param: IsNumberStringValidator
  ): Promise<void> {
    const quiz = await this.quizService.getQuiz(param.id)

    // TODO: subset, randomization on questions and options
    // TODO: store quiz to user session (to prevent foul play on submission!)

    if (!quiz) throw new NotFoundException()
    res
      .status(HttpStatus.OK)
      .json(this.quizService.formQuizAttemptResponse(quiz))
  }

  @Post('quiz/:id/submission')
  async postSubmission(
    @Res() res: Response,
    @Body() submission: SubmissionDto,
    @Param() param: IsNumberStringValidator
  ): Promise<void> {
    const quiz = await this.quizService.getQuiz(param.id)

    if (!quiz) throw new NotFoundException()

    try {
      this.takerService.assertValidSubmission(quiz, submission)
    } catch (err: any) {
      throw new BadRequestException(
        `Response does not match quiz definition: ${err.message}`
      )
    }

    try {
      const submissionResponse = this.takerService.mark(quiz, submission)
      res.status(HttpStatus.OK).json(submissionResponse)
    } catch (err) {
      throw new InternalServerErrorException('Unable to mark quiz submission')
    }
  }
}