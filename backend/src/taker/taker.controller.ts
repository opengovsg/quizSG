/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Controller,
  HttpStatus,
  Res,
  Req,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { Response, Request } from 'express'
import { QuizService } from 'quiz/quiz.service'
import { IsQuizIdPresentValidator } from 'helpers'
import { SubmissionRequestDto } from './dto/submit-quiz.dto'
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
    @Param() { id: quizId }: IsQuizIdPresentValidator
  ): Promise<void> {
    const quiz = await this.quizService.getQuizWithQuestionsAndOptions(quizId)

    // TODO: subset, randomization on questions and options
    // TODO: store quiz to user session (to prevent foul play on submission!)

    if (!quiz) throw new NotFoundException()
    res
      .status(HttpStatus.OK)
      .json(this.quizService.formQuizAttemptResponse(quiz))
  }

  @Post('quiz/:id/submission')
  async postSubmission(
    @Req() req: Request,
    @Res() res: Response,
    @Body() submission: SubmissionRequestDto,
    @Param() { id: quizId }: IsQuizIdPresentValidator
  ): Promise<void> {
    const quiz = await this.quizService.getQuizWithQuestionsAndOptions(quizId)

    if (!quiz) throw new NotFoundException()
    try {
      // TODO: zod should be used for this
      this.takerService.assertValidSubmission(quiz, submission)
    } catch (err: any) {
      throw new BadRequestException(
        `Response does not match quiz definition: ${err?.message}`
      )
    }

    try {
      const submissionResponse = this.takerService.mark(quiz, submission)

      this.takerService.recordSubmission(
        quiz,
        submission,
        submissionResponse,
        req
      )

      res.status(HttpStatus.OK).json(submissionResponse)
    } catch (err: any) {
      throw new InternalServerErrorException(
        `Unable to mark quiz submission: ${err?.message}`
      )
    }
  }
}
