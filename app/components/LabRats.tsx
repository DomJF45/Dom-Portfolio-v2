"use client"
import TechTag from './TechTag'
import { Box, Text, Stack, HStack, SimpleGrid, Breadcrumb, BreadcrumbItem, Divider, Image, useColorModeValue, BreadcrumbLink } from '@chakra-ui/react'
import Section from './Section'
import ProjectStack from './ProjectTags/ProjectStack'
import Crumbs from './Crumbs'

const LabRats = () => {

  return (

    <Stack
      width={'100%'}
      alignItems={'start'}
      paddingBottom={14}
    >
      <Crumbs path={['projects']} current={'LabRats'} />
      <Section title={'LabRats'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/labrats.png?updatedAt=1680449750578'} link={'http://labrats.herokuapp.com/'}>
        <Text>
          LabRats is a project management system for use in research laboratories.
        </Text>
      </Section>
      <Section title={'Create a Lab'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.50.57_PM.png?updatedAt=1680582036899'}>
        <Text>
          A primary investigator can create a lab that holds projects. They can then add members to that lab to assign projects.
        </Text>
      </Section>
      <Section
        title={'Add Projects'}
        imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.51.16_PM.png?updatedAt=1680582036966'}
      >
        <Text>
          Primary investigators or Graduate Research Students can create projects that will hold tasks regarding that projects area.
        </Text>
      </Section>
      <Section
        title={'Add Tasks'}
        imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.51.30_PM.png?updatedAt=1680582037072'}
      >
        <Text>
          Users can add and complete tasks within a given project.
        </Text>
      </Section>
      <ProjectStack langArr={['React', 'Node.JS', 'Javascript', 'MongoDB', 'Express.JS']} />
    </Stack>

  )

}

export default LabRats;
