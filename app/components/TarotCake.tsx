"use client"
import { Stack, Text } from '@chakra-ui/react'
import Section from '../components/Section'
import ProjectStack from '../components/ProjectTags/ProjectStack'
import Crumbs from '../components/Crumbs'

const TarotCake = () => {

  return (

    <Stack
      width={'100%'}
      alignItems={'start'}
      paddingBottom={14}
    >
      <Crumbs path={['projects']} current={'TarotCake'} />
      
      <Section title='TarotCake' imgSrc='https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake/Screenshot_2023-04-03_at_4.29.45_PM.png?updatedAt=1680553891788'>
        <Text>
          TarotCake is a daily tarot card generator where users can view three randomly drawn tarot cards.
        </Text>
      </Section>

      <Section title={'Past, Present, Future'} imgSrc='https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake/Screenshot_2023-04-03_at_4.30.00_PM.png?updatedAt=1680553892904' >
        <Text>
          Users can flip a card one by one to reveal the card in the time slot. Because it is based on a three card tarot draw, the cards represent in order past, present, and future.
        </Text>
      </Section>

      <Section title={'History'} imgSrc='https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake/Screenshot_2023-04-03_at_4.30.18_PM.png?updatedAt=1680553893889'>
        <Text>
          Users can browse their history because their ID is stored as a cookie. Once the request to the server is made, the server will validate the cookie, then the id in the database, then response with the users history.
        </Text>
      </Section>

      <Section title='Info' imgSrc='https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake/Screenshot_2023-04-03_at_4.34.01_PM.png?updatedAt=1680554053694'>
        <Text>
          Each card will pop open a modal containing information about the chosen card. Users can read these bios to gain introspection about their past, present, and future.
        </Text>
      </Section>

      <ProjectStack langArr={['React', 'Node.JS', 'Express.JS', 'Redux', 'Typescript', 'MongoDB']} />

    </Stack>


  )

}

export default TarotCake;
