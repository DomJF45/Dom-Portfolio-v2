"use client"
import TechTag from '../components/TechTag'
import { Box, Text, Stack, HStack, SimpleGrid, Breadcrumb, BreadcrumbItem, Divider, Image, useColorModeValue, BreadcrumbLink } from '@chakra-ui/react'
import Section from './Section'
import ProjectStack from '../components/ProjectTags/ProjectStack'
import Crumbs from '../components/Crumbs'

const MyACT = () => {

  return (
    <Stack 
      width={'100%'}
      alignItems={'start'}
      paddingBottom={14}
    >
      <Crumbs path={['projects']} current={'MyACT'} />
      <Section title={'MyACT'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT.png?updatedAt=1680459349671'}>
        <Text>
        MyACT is an Acceptance and Commitment therapy application that allows users to conduct Mindfulness based exercises. Users can log on, and view the data concerning their previous exercises to guage how far they have come along. Moreover, users can also document their thoughts in a journal.
        </Text>
      </Section>
      
      <Section title={'Dashboard'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.54.30_PM.png?updatedAt=1680544671768'}>
        <Text>
          The user is greeted with a dashboard after logging in consisting of data gathered from their exercises. Here, the user can see which areas of the size core ACT values they need to improve upon. They can also view their daily streaks, hours on the app, and days used. Additionally, users can also view the total amount of exercises they have engaged with.
        </Text>
      </Section>
      <Section title={'Dynamic Exercises'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.55.21_PM.png?updatedAt=1680544671721'}>
        <Text>
          Users engage with dynamic exercises, such as a breathing exercise. This exercise prompts the user to input a speed level at which they would like to breathe in and out to. The animation that follows is based off their speed to give users control over their meditateve breathing animation.
        </Text>
      </Section>
      <Section title={'Other Exercises'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.56.13_PM.png?updatedAt=1680544671590'}>
        <Text>
          This is an example of another exercise users can interact with. This exercise allows users to drag and drop certain cards based off their importance level. These values might change daily, so it is important for the user to stay consistent with this exercise in order to view their growth.
        </Text>
      </Section> 
      <Section title={'The Six Core Values'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.54.56_PM.png?updatedAt=1680544671477'}>
        <Text>
          Users can explore each of the six core processes of Acceptance and Commitment Therapy. Each process contains a video about the process, as well an interactive exercise tailored for that value.
        </Text>
      </Section>
      <Text fontSize={'2xl'}>
        Journal
      </Text>
      <Divider width={'48px'} />
      <SimpleGrid
        width="100%"
        columns={[1, 1, 2]}
        gap={3}
      >
        <Image
          src='https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.56.37_PM.png?updatedAt=1680544671471'
          borderRadius={'12px'}
        />
        <Image
          src='https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT/Screenshot_2023-04-03_at_1.56.57_PM.png?updatedAt=1680544671838'
          borderRadius={'12px'}
        />
      </SimpleGrid>
      <Text>
        Users can also post journal entries with a rating on their current mood. After posting, users can sort by their moods to find entries when they were feeling a certain type of mood.
      </Text> 
 
      <ProjectStack langArr={['React', 'Node.JS', 'Typescript', 'MongoDB', 'Expres.JS']} />

    </Stack>

  )

}

export default MyACT;
