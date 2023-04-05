"use client"
import { Box, Stack, Text, Heading, StackDivider, Divider, useColorModeValue } from '@chakra-ui/react'
const About = () => {

  return (
    <Box
      width={'100%'}
    >
      <Stack alignItems={'start'}>
        <Text as={'h1'} fontSize={'2xl'} fontWeight={700} textAlign={'justify'}>
          About
        </Text>
        <Divider color={useColorModeValue('#303030','#ffffff63')} width={'80px'} />
        <Text>
          Dominick (Dom) is a full-stack software developer with an emphasis on front-end web development. He is currently pursuing a Master of Science degree in Software Engineering at Kennesaw State University, to which he is expected to complete by the end of 2023. When he is not studying, Dominick likes to work on personal projects and hone his front-end engineering skills.
        </Text>
      </Stack>
    </Box>
  )
}

export default About;
