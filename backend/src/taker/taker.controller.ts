import { Controller, HttpStatus, Res, Get } from '@nestjs/common'
import { Response } from 'express'
import { OptionService } from 'option/option.service'
import { QuestionService } from 'question/question.service'
import { QuizService } from 'quiz/quiz.service'
import { UserService } from 'user/user.service'

const dummyQuiz = {
  id: 12345,
  name: 'This is a great quiz',
  ownerId: 12345,
  createdAt: '2022-01-20T09:31:25.265Z',
  description: 'In this quiz, we will test your knowledge of OGP',
  questions: [
    {
      id: 12345,
      text: 'Bla bla bla question 1?',
      details: 'extra info about the question 1',
      type: 'MCQ-M',
      options: [
        {
          id: 1234,
          text: 'Option 1',
        },
        {
          id: 2345,
          text: 'Option 2',
        },
        {
          id: 3456,
          text: 'Option 2',
        },
      ],
    },
    {
      id: 12345,
      text: 'Bla bla bla question 2?',
      details: 'extra info about question 2',
      type: 'MCQ-1',
      options: [
        {
          id: 1234,
          text: 'Option 1',
        },
        {
          id: 2345,
          text: 'Option 2',
        },
        {
          id: 3456,
          text: 'Option 2',
        },
      ],
    },
  ],
}

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
    res.status(HttpStatus.OK).json(dummyQuiz)
  }
}
