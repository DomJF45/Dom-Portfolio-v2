import { Box, Text } from '@chakra-ui/react'

const InProgress = () => {

  return (

    <>
      <Box
        width={'70px'}
        height={'25px'}
        backgroundColor={'#ebbf8e'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'15px'}
      >
        <Text fontSize={'2xs'}>
          In Progress
        </Text>
      </Box>
    </>

  )

}

export default InProgress;
