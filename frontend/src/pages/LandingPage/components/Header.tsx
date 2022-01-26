import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Box
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      bg="primary.500"
      py="16"
    >
      <Text textStyle="display-1">QuizSG</Text>
      <Text textStyle="subhead-1">Hack For Public Good 2022</Text>
    </Box>
  )
}

export default Header
