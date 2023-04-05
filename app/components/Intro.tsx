"use client"
import { Box, Stack, HStack, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const Intro = () => {

  return (
    <Box
        width={['100%', '100%', 'md']}
        height={'25vh'}
        display={'flex'}
        justifyContent={'start'}
        alignItems={'start'}

      >
        <Stack
          width={'100%'}
          
          justifyContent={'center'}
        >
    
          <Heading variant={'section-title'}
            backgroundColor={useColorModeValue('#5b5b71', '#c19996')}
            width={'125px'}
            height={'30px'}
            borderRadius={'5px'}
            fontSize={'1.3rem'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            color={'rgba(255,255,255,.87)'}
          >Hello! I'm</Heading>  
          <Heading variant={'section-title'}
            fontSize={['4rem', '4rem', '6rem']}
          >Dominick</Heading>
          <Box
            display={'flex'}
            width={'100%'}
            height={10}
            backgroundColor={useColorModeValue('#30303018', 'rgba(255,255,255,.10)')}
            justifyContent={'center'}
            borderRadius={'5px'}
            alignItems={'center'}
          >
            <Text 
              fontSize={['.8rem', '.8rem', '1rem']}
            >
              A Software Developer from Kennesaw, Georgia
            </Text>
          </Box>
        </Stack>
      </Box>

  )

}

export default Intro;
