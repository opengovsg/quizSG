/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

function validateName(value: string) {
  let error
  if (!value) {
    error = 'Field is required'
  }
  return error
}

const QuizConfigurationForm = ({
  quizConfig,
}: {
  quizConfig: {
    quizName: string
    organisationName: string
    passingScore: string
    quizDescription: string
  }
}): JSX.Element => {
  return (
    <Formik
      initialValues={quizConfig}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="quizName" validate={validateName}>
            {({ field, form }: { field: any; form: any }): JSX.Element => (
              <FormControl
                isInvalid={form.errors.quizName && form.touched.quizName}
                isRequired
              >
                <FormLabel htmlFor="quizName">Quiz Name</FormLabel>
                <Input
                  {...field}
                  id="quizName"
                  placeholder="Eg. National Heritage Quiz"
                />
                <FormErrorMessage>{form.errors.quizName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="organisationName" validate={validateName}>
            {({ field, form }: { field: any; form: any }): JSX.Element => (
              <FormControl
                isInvalid={
                  form.errors.organisationName && form.touched.organisationName
                }
                isRequired
              >
                <FormLabel htmlFor="organisationName">
                  Organisation Name
                </FormLabel>
                <Input
                  {...field}
                  id="organisationName"
                  placeholder="Eg. Open Government Products"
                />
                <FormErrorMessage>
                  {form.errors.organisationName}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="passingScore" validate={validateName}>
            {({ field, form }: { field: any; form: any }): JSX.Element => (
              <FormControl
                isInvalid={
                  form.errors.passingScore && form.touched.passingScore
                }
                isRequired
              >
                <FormLabel htmlFor="passingScore">Passing Score (%) </FormLabel>
                <Input {...field} id="passingScore" placeholder="Eg. 50" />
                <FormErrorMessage>{form.errors.passingScore}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="quizDescription" validate={validateName}>
            {({ field, form }: { field: any; form: any }): JSX.Element => (
              <FormControl
                isInvalid={
                  form.errors.quizDescription && form.touched.quizDescription
                }
                isRequired
              >
                <FormLabel htmlFor="quizDescription">
                  Quiz Description
                </FormLabel>
                <Input
                  {...field}
                  id="quizDescription"
                  placeholder="Describe your quiz"
                />
                <FormErrorMessage>
                  {form.errors.quizDescription}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Create Quiz
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default QuizConfigurationForm
