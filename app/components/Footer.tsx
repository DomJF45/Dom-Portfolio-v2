import { Box, Text } from '@chakra-ui/react'

const Footer = () => {

  return (
    <Box
      display={'flex'}
      width={'100%'}
      justifyContent={'center'}
      position={'absolute'}
      marginBottom={15}
      bottom={0}
    >
      <Text textAlign={'center'} fontSize={'xs'}>
        {'Made with <3 by Dom 2023'}
      </Text>
    </Box>
  )

}

export default Footer;
