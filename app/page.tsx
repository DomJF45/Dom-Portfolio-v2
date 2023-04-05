import { M_PLUS_Rounded_1c } from 'next/font/google'
import { Box, Heading, Stack, Image, Avatar, Text, useColorModeValue, HStack } from '@chakra-ui/react'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Links from './components/Links'

const myFont = M_PLUS_Rounded_1c({
  weight: ['500', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <> 
      <Intro />
      <About />
      <Projects />
      <Technologies />
      <Links />
    </> 
  )
}
