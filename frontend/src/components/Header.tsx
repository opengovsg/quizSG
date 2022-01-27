/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text } from '@chakra-ui/react'

const Header = ({
  children,
  subhead,
  textStyle = 'h1',
  subheadTextStyle = 'subhead-1',
  w,
}: {
  children: string
  subhead?: string
  textStyle?: any
  subheadTextStyle?: any
  w?: string
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
      w={w}
    >
      <Text textStyle={textStyle}>{children}</Text>
      <Text textStyle={subheadTextStyle}>{subhead}</Text>
    </Box>
  )
}

export default Header
