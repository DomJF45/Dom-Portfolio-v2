import React, { SetStateAction } from 'react'
import { Box, Link, VStack, StackDivider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react'
import { iLinkItem } from './linkData';

interface Props {
  menuOpen: boolean,
  linkItems: iLinkItem[]
}

const MobileNav = (props: Props) => {

  const { menuOpen, linkItems } = props;

  return (
    <motion.div
          initial={{
            scale: .5,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            opacity: 0,
            scale: .5
          }}
          transition={{
            duration: .3
          }}
          style={{position: 'absolute', top: 15, right: 0, zIndex: 99}}
        >

        <Box
          display={menuOpen ? ['flex', 'flex', 'none'] : 'none'}
          justifyContent={'center'}
          width={'200px'}
          height={'200px'}
          backgroundColor={useColorModeValue('#5b5b71', '#c19996')}
          backdropBlur={'10px'}
          zIndex={2}
          position={'absolute'}
          shadow={'2xl'}
          top={20}
          right={5}
          borderRadius={10}
        >
          <VStack
            w={'85%'}
            height={'100%'}
            justifyContent={'space-between'}
            color={useColorModeValue('rgba(255,255,255,.87)', 'rgba(255,255,255,.75)')}
            fontWeight={700}
            alignItems={'start'}
          >
            {linkItems.map((item, index) => {
                
              return (

                <Link
                  key={index}
                  width={'100%'}
                  height={'50px'}
                  display={'flex'}
                  justifyContent={'start'}
                  alignItems={'center'}
                  fontSize={'1rem'}
                  cursor={'pointer'}
                  transition={'.3s ease-in-out'}
                  borderBottom={index === linkItems.length-1 ? '' : 'dashed 1px rgba(255,255,255,.67)'}
                  href={item.path}
                  target={item.newWindow ? "_blank" : ""}
                >{item.title}</Link>  
              )  

              })
            } 
          </VStack>
      </Box>
    
    </motion.div>
  )

}

export default MobileNav;
