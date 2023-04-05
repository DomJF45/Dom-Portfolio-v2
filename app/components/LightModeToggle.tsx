import { useState } from 'react';
import { Square, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineMenu } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';
import { BsMoonFill } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

const LightModeToggle = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    localStorage.setItem('chakra-ui-color-mode', JSON.stringify(colorMode));
    toggleColorMode();
    

  }

  return (
    <> 
    <AnimatePresence mode="wait" initial={false}>
      
        <motion.div
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          key={useColorModeValue('light', 'dark')}
          transition={{ duration: .3 }}
        >

          
          <IconButton
            aria-label='Toggle theme'
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<BsMoonFill size={18} />, <MdOutlineLightMode size={20} />)}
            onClick={handleToggle}
          ></IconButton>

          
        </motion.div>

      </AnimatePresence>
    </>
  )
  
}

export default LightModeToggle;
