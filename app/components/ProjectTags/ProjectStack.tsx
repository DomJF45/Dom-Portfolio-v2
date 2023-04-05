import { SimpleGrid, Text, Divider } from '@chakra-ui/react'
import LangTag from './LangTag'

interface Props {
  langArr: string[];
}

const ProjectStack = (props: Props) => {

  const { langArr } = props; 

  return (
    <>
      <Text fontSize={'xl'} pt={5}>Built With: </Text>
      <Divider width={'50px'} />
      <SimpleGrid
        columns={[3, 3, 4]}
        width={['100%', '100%', '50%']}
        gap={3}
      >
        {langArr.map((lang, index) => {
          return (
            <LangTag language={lang} size={'md'} key={index} />
          )
        })}
      </SimpleGrid>
    </>
       

  )

}

export default ProjectStack;
