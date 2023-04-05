"use client"
import ResumeBody from '../components/ResumeBody'
import { Box, Text, Stack, SimpleGrid, Link, HStack, Divider, List, UnorderedList, ListItem, useColorModeValue, Button } from '@chakra-ui/react'
import CoolLink from '../components/CoolLink'
import Header from '../components/Header'
import { IoDownloadOutline } from 'react-icons/io5'


const Resume = () => {
  const handleDownload = () => {
    fetch('dominick-founds-resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'dominick-founds-resume';
        alink.click();
      })
    })
  }

  return (
    <Box>
      
      <Stack 
        width={'100%'}
        backgroundColor={useColorModeValue('#30303018', 'rgba(255,255,255,.10)')}
        borderRadius={'12px'}
        padding={3}
      >
        <HStack width={'100%'} justifyContent={'space-between'}>
          <Header>Summary</Header>
          <Button onClick={handleDownload}>Download<IoDownloadOutline size={15} /></Button>
        </HStack>
        <Divider width={'100%'} />
        <ResumeBody>
          Full Stack Engineer with proficiency in React, Typescript, and Node.JS
        </ResumeBody>
        <Header>
          Skills
        </Header>
        <Divider width={'100%'} />
        <HStack width={'100%'} justifyContent={'space-between'}>
          <ResumeBody>        
            Proficient:
          </ResumeBody>
          <ResumeBody>
            React, Node.JS, Typescript, REST API, HMTL, CSS, OOP
          </ResumeBody>
        </HStack>
        <HStack width={'100%'} justifyContent={'space-between'}>
          <ResumeBody>
            Some Experience:
          </ResumeBody> 
          <ResumeBody>
            SQL, AWS, Java, C++, Python, Design Patterns
          </ResumeBody> 
        </HStack>
        <HStack width={'100%'} justifyContent={'space-between'} >
          <ResumeBody>
            Currently Learning:
          </ResumeBody>
          <ResumeBody>
            Ruby on Rails, React Native, GraphQL
          </ResumeBody> 
        </HStack>
        <Header>
          Projects
        </Header>
        <Divider width={'100%'} />
        <Box width={'100%'}>

          <UnorderedList width={'95%'} fontSize={['sm', 'sm', 'md']}>
            <ListItem>
              2022 – Lab Rats – Created and continue to maintain Lab Rats, a full-stack research laboratory task management system made with React (client-slide) and Node (server-side) with a MongoDB NoSQL database under an AGILE development process. Applied systems architecture knowledge by diagramming the architecture and user-flow. In addition, scheduled each part of the web-apps lifecycle and broke it down into phases which was used to calculate a critical path using the Critical Path Method (CPM) for a timeline regarding product delivery.
            </ListItem>
            <ListItem>
              2021 – NEAARRD Lab Website – Created and continue to maintain the NEAARRD Lab’s website built with React. The website was built for a cognitive neuropsychological research laboratory at Kennesaw State University. The website contains links for projects, current studies, past research, and information for lab members, as well as a contact section for general consultation or applications to join the lab.
            </ListItem>
            <ListItem>
              2022 – Personal Website – Created and continue to maintain a personal website using Next.JS, React, and CSS. The website contains links to projects, blog posts, and contact information.
            </ListItem>
            <ListItem>
              2021 – Vaping Dependency – Created a full-stack psychological web experiment that consists of a modified Stroop Task using Node and Express (server-side), AWS S3 buckets for CSV data storage, and standard HTML, JavaScript, and CSS alongside the JsPsych JavaScript Library.
            </ListItem>
            <ListItem>
              2021 – Stroop Task - Created the Stroop task (cognitive psychological evaluation measure) that was programmed entirely in C++. The project utilized the allegro 5 game library to construct visual stimuli triggered by user input. Additionally, the project utilized fundamental algorithms and data structures to create a working psychological experiment that tracks and logs the data obtained from the user input.
            </ListItem>
          </UnorderedList>
        </Box>
        <Header>
          Work Experience
        </Header>
        <Divider width={'100%'} />
        <SimpleGrid
          columns={3}
          width={"100%"}
        >
          <ResumeBody>Full-Stack Engineer</ResumeBody>
          <ResumeBody>NEAARRD Lab</ResumeBody>
          <ResumeBody>Kennesaw State University 2021 - 2023</ResumeBody>
        </SimpleGrid>
        <Box width="100%">
          <UnorderedList fontSize={['sm', 'sm', 'md']}>
            <ListItem>
              Migrated web experiments to operational independence.
            </ListItem>
            <ListItem>
              Actively engaged end-users and product managers to better understand and improve web experiments.
            </ListItem>
            <ListItem>
              Wrote significant portion of code foundation, allowing code reuse and rapidly iterated features.
            </ListItem>
          </UnorderedList>
        </Box>
        <SimpleGrid
          columns={3}
          width={"100%"}
          pt={10}
        >
          <ResumeBody>Research Assistant</ResumeBody>
          <ResumeBody>BARnGRIL Lab</ResumeBody>
          <ResumeBody>Kennesaw State University 2019 - 2022</ResumeBody>
        </SimpleGrid>
        <Box width="100%">
          <UnorderedList fontSize={['sm', 'sm', 'md']}>
            <ListItem>
              Wrote code for psychological experiments in C++.
            </ListItem>
            <ListItem>
              Analyzed complex electroencephalograph data.
            </ListItem>
            <ListItem>
              Presented at Undergraduate Research Conferences.
            </ListItem>
          </UnorderedList>
        </Box>
        <Header>
          Education
        </Header>
        <Divider width={'100%'} />
        <Stack>
          <HStack width={'100%'} justifyContent={'space-between'}>
            <ResumeBody>Bachelor of Science, 3.7 GPA</ResumeBody>
            <ResumeBody>Kennesaw State University 2021</ResumeBody>
          </HStack>
          <HStack width={'100%'} justifyContent={'space-between'}>
            <ResumeBody>Master of Science Software Engineering, 4.0 GPA</ResumeBody>
            <ResumeBody>Kennesaw State University 2023</ResumeBody>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Resume;
