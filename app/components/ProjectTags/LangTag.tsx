import { Box, Text } from '@chakra-ui/react'

interface Props {
  language: string;
  size?: 'sm' | 'md';
}

const LangTag = (props: Props) => {

  const { language, size } = props;

  if (size === 'md'){

    return (
      <>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'85px'}
          height={'35px'}
          backgroundColor={'#c19996'}
          borderRadius={'5px'}
        >
          <Text fontSize={'xs'}>
            {language}
          </Text>
        </Box>
      </>

    )

  }

  return (

    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'65px'}
        height={'25px'}
        backgroundColor={'#c19996'}
        borderRadius={'15px'}
      >
        <Text fontSize={'2xs'}>
          {language}
        </Text>
      </Box>
    </>

  )

}

export default LangTag;
