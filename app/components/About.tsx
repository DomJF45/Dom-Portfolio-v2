"use client"
import { Box, Stack, Text, Heading, StackDivider, Divider, useColorModeValue } from '@chakra-ui/react'
const About = () => {

  return (
    <Box
      width={'100%'}
      paddingBlock={7}
    >
      <Stack alignItems={'start'}>
        <Text as={'h1'} fontSize={'2xl'} fontWeight={700} textAlign={'justify'}>
          About
        </Text>
        <Divider color={useColorModeValue('#303030','#ffffff63')} width={'80px'} />
        <Text>
          I am a full-stack software developer with an emphasis on front-end web development. I am currently pursuing a Master of Science degree in Software Engineering at Kennesaw State University, to which I am expected to complete by the end of 2023. When I'm not studying, I like to work on personal projects and hone my front-end engineering skills.
        </Text>
      </Stack>
    </Box>
  )
}

export default About;
