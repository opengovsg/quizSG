/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Header = ({
  children,
  subhead,
  textStyle = 'display-1',
  subheadTextStyle = 'subhead-1',
}: {
  children: string
  subhead?: string
  textStyle?: any
  subheadTextStyle?: any
}): JSX.Element => {
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
      <Text textStyle={textStyle}>{children}</Text>
      <Text textStyle={subheadTextStyle}>{subhead}</Text>
    </Box>
  )
}

export default Header
