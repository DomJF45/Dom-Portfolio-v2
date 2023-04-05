"use client"
import { Box, Text, Divider, Stack, SimpleGrid, HStack, useColorModeValue } from '@chakra-ui/react'
import Project from './Project'
import { ProjectData } from './ProjectData' 

const Projects = () => {

  return (

    <Box
      width={'100%'}
    >
      <Stack alignItems={'start'}>
        <Text as={'h1'} fontSize={'2xl'} fontWeight={700} textAlign={'justify'}>
          Projects
        </Text>
        <Divider color={useColorModeValue('#303030','#ffffff63')} width={'80px'} />
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={10}
          width={'100%'}
        >

          {ProjectData.map((project, index) => {
            return (
              <Project project={project} key={index} />
            )
          })}
                    
        </SimpleGrid>
      </Stack>
    </Box>


  )

}

export default Projects;
