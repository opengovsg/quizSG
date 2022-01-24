import { Controller, Get, Post, Delete } from '@nestjs/common'
import { ConfigService } from '../config/config.service'

// controller for creator routes under the /creator prefix

@Controller('creator')
export class CreatorController {
  constructor(private creator: CreatorService, private config: ConfigService) {}

  @Get('quizzes')
  async getAllQuizzes() {
    // return all quizzes
  }

  @Post('quiz')
  async createNewQuiz() {
    // accept a quiz paylopad as inoput, parse and validate, store
  }

  @Get('quiz/:quizid')
  async getQuiz() {
    // get one quiz - return full definition, including answers
  }

  @Delete('quiz/:quizid')
  async deleteQuiz() {
    // delete one quiz, return ok / fail
  }
}
