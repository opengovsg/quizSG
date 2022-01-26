import { Controller, HttpStatus, Res, Get } from '@nestjs/common'
import { Response } from 'express'
import { OptionService } from 'option/option.service'
import { QuestionService } from 'question/question.service'
import { QuizService } from 'quiz/quiz.service'
import { UserService } from 'user/user.service'

@Controller('')
export class TakerController {
  constructor(
    private readonly userService: UserService,
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService
  ) {}

  @Get('quiz/:quizid/attempt')
  async getAll(@Res() res: Response): Promise<void> {
    res.status(HttpStatus.OK).json({ hello: 'there' })
  }
}
