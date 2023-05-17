"use client"

import { Stack, Text } from '@chakra-ui/react';
import Crumbs from './Crumbs';
import ProjectStack from './ProjectTags/ProjectStack';
import Section from './Section';

const MinionDex = () => {

  return (
    <Stack
      width={'100%'}
      alignItems={'start'}
      paddingBottom={14}
    >
      <Crumbs path={['projects']} current={'XIV-minion-dex'} />
      <Section title={'XIV-minion-dex'} imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/xiv-minion/xiv-minion?updatedAt=1684348483386'} link={'https://xiv-minion-dex.vercel.app/'}>
        <Text>
          XIV-minion-dex is a simple pokedex-like application for Final Fantasy XIV minions. The user can search and sort the minions using the search bar and filter located in the top left and top right of the home page. Additionally, a user can click on each minion to look at the minions stats and information.
        </Text>
      </Section>

      <Section
        title={'Search'}
        imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/xiv-minion/search?updatedAt=1684348975161'}
      >
        <Text>
          A user can search all of the minions. I implemented a debouncer for the search function in order to reduce excessive api calls.
        </Text>
      </Section>

      <Section
        title={'Sort'}
        imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/xiv-minion/sort?updatedAt=1684349025108'}
      >
        <Text>
          A user can sort each of the minions by the type of minion: Critter, Monster, Poppet, and Gadget
        </Text>
      </Section>

      <Section
        title={'Verminion Stats'}
        imgSrc={'https://ik.imagekit.io/wvlrlc0tr/Portfolio/xiv-minion/stats?updatedAt=1684349081318'}
      >
        <Text>
          After clicking the minion you can view the relevant data, as well as Verminion stats made with recharts.
        </Text>
      </Section>
      <ProjectStack langArr={['React', 'Typescript', 'ChakraUI']} />
    </Stack>
  )
}

export default MinionDex;
