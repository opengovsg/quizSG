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

const QuestionField = () => {
  const questionNumber = 1
  const questionType = 'Multiple Choice'
  const choices = [{}, {}, {}, {}]

  return (
    <Flex mt={12} color="primary.900">
      <Text textStyle="h1">{questionNumber}.</Text>
      <Box pl={8} pr={2} py={2} flex="1">
        <Flex justifyContent="space-between">
          <Text textStyle="subhead-1" py={2}>
            Question Type: <b>{questionType}</b>
          </Text>
          {/* delete question */}
          <Button colorScheme="danger">
            <DeleteIcon />
          </Button>
        </Flex>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Question Point Value
          </Text>
          <Input placeholder="E.g 4" />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Question Name
          </Text>
          <Input placeholder="E.g What is 1 + 1?" />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Additional Details
          </Text>
          <Textarea
            placeholder="additional Information for the question"
            minAutosizeRows={5}
          />
        </Box>
        <Box py={1}>
          <Text textStyle="subhead-1" py={2}>
            Answer Explanation
          </Text>
          <Textarea
            placeholder="additional information and explanation for the answer"
            minAutosizeRows={5}
          />
        </Box>
        {/* Radio Answer inputs */}
        <Box mt={2}>
          <Text textStyle="subhead-1" py={2}>
            Answers (select the correct answer)
          </Text>
          <Box>
            <RadioGroup
              onChange={(e) => {
                return
              }}
              value={2}
            >
              {choices.map((el, index) => {
                return (
                  <Box my={2}>
                    <Flex alignItems="center">
                      <Radio value={index}>Answer {index + 1}</Radio>
                      <Button
                        color="primary.700"
                        variant="reverse"
                        bg="primary.100"
                        border="none"
                        _hover={{
                          background: 'primary.100',
                          color: 'danger.500',
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Flex>
                    <Input />
                  </Box>
                )
              })}
            </RadioGroup>
          </Box>
        </Box>
        {/* Checkbox Answer inputs */}
        <Box mt={2}>
          <Text textStyle="subhead-1" py={2}>
            Answers (select the correct answer)
          </Text>
          <Box>
            <CheckboxGroup
              onChange={(e) => {
                return
              }}
              value={[]}
            >
              {choices.map((el, index) => {
                return (
                  <Box my={2}>
                    <Flex alignItems="center">
                      <Checkbox value={index}>Answer {index + 1}</Checkbox>
                      <Button
                        color="primary.700"
                        variant="reverse"
                        bg="primary.100"
                        border="none"
                        _hover={{
                          background: 'primary.100',
                          color: 'danger.500',
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Flex>
                    <Input />
                  </Box>
                )
              })}
            </CheckboxGroup>
          </Box>
        </Box>
        <Button isFullWidth my={8} variant="outline">
          Add Answer Field
        </Button>
      </Box>
    </Flex>
  )
}

export default QuestionField
