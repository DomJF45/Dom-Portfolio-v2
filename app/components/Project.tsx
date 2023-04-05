import { Stack, Box, HStack, Text, LinkBox, useColorModeValue, LinkOverlay } from '@chakra-ui/react'
import { iProjectData } from './ProjectData'
import LangTag from './ProjectTags/LangTag';

interface Props {
  project: iProjectData
}

const Project = (props: Props) => {

  const { project } = props;

  return (
    <LinkBox>
    <Stack
      alignItems={'center'}
      transition={'.3s ease-in-out'}
      cursor={'pointer'}
      _hover={{
        transform: 'scale(1.03)'
      }}  
    >
        <Box
          backgroundColor={useColorModeValue('#30303018', 'rgba(255,255,255,.10)')}
          backgroundImage={`url(${project.img})`}
          backgroundPosition={'center'}
          bgSize={'100% 100%'}
          bgRepeat={'no-repeat'}
          height={'200px'}
          width={'100%'}
          borderRadius={'12px'}
        >
          <HStack
            height={'10%'}
            padding={'10px'}
            alignItems={'start'}
            justifyContent={'start'}
          >
            {project.inProgress ? project.inProgress : null}
          </HStack>
          <HStack
            height={'90%'}
            alignItems={'end'}
            justifyContent={'end'}
            padding={'10px'}
          >
            {project.languages.map((lang, index) => {
              return (
                <LangTag language={lang} key={index} />
            )})}
          </HStack>
        </Box>
        <Stack 
          width={'80%'}
          alignItems={'center'}
        >
          <LinkOverlay
            href={project.url}
          >
          <Text 
            textAlign={'center'}
            fontSize={'md'}
          >
            {project.name}
          </Text>
          <Text
            textAlign={'center'}
            fontSize={'sm'}
          >
            {project.bio}
          </Text>
          </LinkOverlay>
      </Stack>      
    </Stack>
    </LinkBox>
  )

}

export default Project;
