"use client"
import { Box, Stack, HStack, Text, Divider, SimpleGrid, Select, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { techData } from './TechData'
import TechTag from './TechTag' 

const Technologies = () => {

  const [filter, setFilter] = useState('Proficient');
  const [filterIndex, setFilterIndex] = useState(0);

  const dragFilterArr = ['Proficient', 'Some', 'Learning', 'IDEs'];
 
  const handleDragFilter = () => {
    if (filterIndex === dragFilterArr.length) {
      setFilterIndex(0);
    } else {
      setFilterIndex(filterIndex + 1);
      setFilter(dragFilterArr[filterIndex])
    }
  }

  const filteredTechData = techData.filter((item) => {
    return item.level === filter;
  })

  return (
    <>
      <Box
        width={'100%'}
        paddingBlock={7}
      >
        <Stack width={'100%'}>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'2xl'} fontWeight={700}>
              Technologies
            </Text>
            <Select
              width={'150px'}
              onChange={(e) => setFilter(e.currentTarget.value)}
              value={filter}
              zIndex={98}
            >
              <option value='Proficient'>Proficient</option>
              <option value='Some'>Some</option>
              <option value='Learning'>Learning</option>
              <option value='IDEs'>IDEs</option>
            </Select>
          </HStack>
          <Divider color={useColorModeValue('#30303063','#ffffff63')} width={'80px'} />
          <Box
            display={'flex'}
            flexDir={'column'}
            width={'100%'}
            backgroundColor={useColorModeValue('#30303018', 'rgba(255,255,255,.10)')}
            justifyContent={'center'}
            borderRadius={'18px'}
            alignItems={'center'}
            minHeight={['40vh', '40vh', '40vh']}
          >
            <Box 
              display={'flex'}
              width={'100%'}
              height={'100%'}
              justifyContent={'end'}
              paddingBlock={5}
              alignItems={'center'}
            >
              <AnimatePresence initial={false} mode={'wait'}>
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}
                  exit={{
                    y: 0,
                    x: -20,
                    opacity: 0
                  }}
                  transition={{
                    duration: .3,
                    ease: 'easeIn'
                  }}
                  key={filter}
                  style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    width: '100%'
                  }}
                  drag={'x'}
                  dragConstraints={{left: -20}}
                  onDrag={
                    () => handleDragFilter()
                  }
                >
                  <SimpleGrid 
                    columns={[2, 2, 3]}
                    spacing={'20px'}
                    marginInline={'auto'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                   
                    {filteredTechData.map((tech, index) => {
                      return(
                        <TechTag name={tech.name} icon={tech.icon} index={index} key={index} filter={filter} lightScheme={tech.lightColor} darkScheme={tech.darkColor} />
                        )
                    })}
                    
                  </SimpleGrid>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Technologies;
