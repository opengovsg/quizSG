/* eslint-disable @typescript-eslint/ban-types */
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  RadioGroup,
  Text,
} from '@chakra-ui/react'
import { Button, Input, Radio, Textarea } from '@opengovsg/design-system-react'
import _ from 'lodash'

type Option = {
  text: string
  isTrue: boolean
}

type QuestionBase = {
  details: string
  explanation: string
  options: Option[]
  pointValue: string
  text: string
  type: 'MCQ-1' | 'MCQ-M'
}

const Question = ({
  index,
  question,
  onDelete,
  setQuestions,
}: {
  index: string
  question: QuestionBase
  onDelete: Function
  setQuestions: Function
}): JSX.Element => {
  return (
    <Flex mt={12} color="primary.900">
      <Text textStyle="h1">{index + 1}.</Text>
      <Box pl={8} pr={2} py={2} flex="1">
        <Flex justifyContent="space-between">
          <Text textStyle="subhead-1" py={2}>
            Question Type:{' '}
            <b>{question.type === 'MCQ-1' ? 'Multiple Choice' : 'Select'}</b>
          </Text>
          {/* delete question */}
          <Button colorScheme="danger" onClick={() => onDelete(index)}>
            <DeleteIcon />
          </Button>
        </Flex>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Question Point Value
          </Text>
          <Input
            placeholder="E.g 4"
            value={question.pointValue}
            onChange={(val) => {
              setQuestions((prevQuestions: QuestionBase[]) => {
                prevQuestions[parseInt(index)].pointValue = val.target.value
                return [...prevQuestions]
              })
            }}
          />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Question Name
          </Text>
          <Input
            placeholder="E.g What is 1 + 1?"
            value={question.text}
            onChange={(val) => {
              setQuestions((prevQuestions: QuestionBase[]) => {
                prevQuestions[parseInt(index)].text = val.target.value
                return [...prevQuestions]
              })
            }}
          />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Additional Details
          </Text>
          <Textarea
            placeholder="Additional Information for the question"
            minAutosizeRows={5}
            value={question.details}
            onChange={(val) => {
              setQuestions((prevQuestions: QuestionBase[]) => {
                prevQuestions[parseInt(index)].details = val.target.value
                return [...prevQuestions]
              })
            }}
          />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Answer Explanation
          </Text>
          <Textarea
            placeholder="Additional information and explanation for the answer"
            minAutosizeRows={5}
            value={question.explanation}
            onChange={(val) => {
              setQuestions((prevQuestions: QuestionBase[]) => {
                prevQuestions[parseInt(index)].explanation = val.target.value
                return [...prevQuestions]
              })
            }}
          />
        </Box>
        {/* Radio Answer inputs by question type */}
        <Box mt={2}>
          {question.type === 'MCQ-1' ? (
            <>
              <Text textStyle="subhead-1" py={2}>
                Answers (select the correct answer)
              </Text>
              <Box>
                <RadioGroup
                  onChange={(val) => {
                    console.log('radio val', val)
                    setQuestions((prevQuestions: QuestionBase[]) => {
                      const newOptions = _.map(
                        prevQuestions[parseInt(index)].options,
                        (option, index) => {
                          return {
                            ...option,
                            isTrue: index === parseInt(val),
                          }
                        },
                      )
                      prevQuestions[parseInt(index)].options = newOptions
                      return [...prevQuestions]
                    })
                  }}
                  value={_.findIndex(question.options, {
                    isTrue: true,
                  }).toString()}
                >
                  {question.options.map((el, optionIndex) => {
                    const optionValue = optionIndex.toString()
                    return (
                      <Box my={2} key={optionValue}>
                        <Flex alignItems="center">
                          <Radio value={optionValue}>
                            Answer {optionIndex + 1}
                          </Radio>
                          <Button
                            color="primary.700"
                            variant="reverse"
                            bg="primary.100"
                            border="none"
                            _hover={{
                              background: 'primary.100',
                              color: 'danger.500',
                            }}
                            onClick={() => {
                              setQuestions((prevQuestions: QuestionBase[]) => {
                                prevQuestions[parseInt(index)].options.splice(
                                  optionIndex,
                                  1,
                                )
                                return [...prevQuestions]
                              })
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        </Flex>
                        <Input
                          placeholder="Type your answer"
                          value={el.text}
                          onChange={(val) => {
                            setQuestions((prevQuestions: QuestionBase[]) => {
                              prevQuestions[parseInt(index)].options[
                                optionIndex
                              ] = {
                                ...prevQuestions[parseInt(index)].options[
                                  optionIndex
                                ],
                                text: val.target.value,
                              }
                              return [...prevQuestions]
                            })
                          }}
                        />
                      </Box>
                    )
                  })}
                </RadioGroup>
              </Box>
            </>
          ) : (
            <>
              <Text textStyle="subhead-1" py={2}>
                Answers (select the correct answer)
              </Text>
              <Box>
                <CheckboxGroup
                  onChange={(values: string[]) => {
                    // console.log('checkbox val', val)
                    setQuestions((prevQuestions: QuestionBase[]) => {
                      const newOptions = _.map(
                        prevQuestions[parseInt(index)].options,
                        (option, index) => {
                          return {
                            ...option,
                            isTrue: _.includes(values, index.toString()),
                          }
                        },
                      )
                      prevQuestions[parseInt(index)].options = newOptions
                      return [...prevQuestions]
                    })
                  }}
                  value={_(question.options)
                    .map((option, index) =>
                      option.isTrue ? index.toString() : undefined,
                    )
                    .compact()
                    .value()}
                >
                  {question.options.map((el, optionIndex) => {
                    const optionValue = optionIndex.toString()
                    return (
                      <Box my={2} key={optionValue}>
                        <Flex alignItems="center">
                          <Checkbox value={optionValue}>
                            Answer {optionIndex + 1}
                          </Checkbox>
                          <Button
                            color="primary.700"
                            variant="reverse"
                            bg="primary.100"
                            border="none"
                            _hover={{
                              background: 'primary.100',
                              color: 'danger.500',
                            }}
                            onClick={() => {
                              setQuestions((prevQuestions: QuestionBase[]) => {
                                prevQuestions[parseInt(index)].options.splice(
                                  optionIndex,
                                  1,
                                )
                                return [...prevQuestions]
                              })
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        </Flex>
                        <Input
                          placeholder="Please specify"
                          value={el.text}
                          onChange={(val) => {
                            setQuestions((prevQuestions: QuestionBase[]) => {
                              prevQuestions[parseInt(index)].options[
                                optionIndex
                              ] = {
                                ...prevQuestions[parseInt(index)].options[
                                  optionIndex
                                ],
                                text: val.target.value,
                              }
                              return [...prevQuestions]
                            })
                          }}
                        />
                      </Box>
                    )
                  })}
                </CheckboxGroup>
              </Box>
            </>
          )}
        </Box>
        <Button
          isFullWidth
          my={8}
          variant="outline"
          onClick={() => {
            setQuestions((prevQuestions: QuestionBase[]) => {
              prevQuestions[parseInt(index)].options = [
                ...prevQuestions[parseInt(index)].options,
                {
                  text: '',
                  isTrue: false,
                },
              ]
              return [...prevQuestions]
            })
          }}
        >
          Add Answer Field
        </Button>
      </Box>
    </Flex>
  )
}

export default Question
