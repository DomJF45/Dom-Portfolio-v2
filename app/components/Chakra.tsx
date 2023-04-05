"use client"
import React from 'react'
import { ChakraBaseProvider, Container, ColorModeScript } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import theme from '../lib/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Chakra({ children }: { children: React.ReactNode }) {

  return (

    <ChakraBaseProvider theme={theme}>
      <ColorModeScript type={'localStorage'} /> 
        <Navbar />
        <AnimatePresence mode={'wait'}>
          <Container maxW='container.md' paddingBlock={14} overflowX={'hidden'} >
            <motion.div
              initial={{
                y: 40,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              exit={{
                y: 40,
                opacity: 0
              }}
              transition={{
                duration: .3,
                ease: 'easeInOut'
              }}

            >


              {children}
          
            </motion.div>
          </Container>
        </AnimatePresence>
      <Footer />
    </ChakraBaseProvider>

  )

}

export default Chakra;
