import { Text, Image, Divider, Box } from '@chakra-ui/react'

interface Props {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
}

const Section = (props: Props) => {
    
  const { title, imgSrc, children } = props;

  return (
  
    <Box paddingBlock={5}>
      <Text fontSize={'2xl'} >
        {title}
      </Text>
      <Divider width='50px' />
      <Image 
        src={imgSrc}
        borderRadius={'12px'}
        marginBlock={5}
      />
      {children}
    </Box>

  )

}

export default Section;
