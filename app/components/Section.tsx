import { Text, Image, Divider, Box, HStack } from '@chakra-ui/react'
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi'

interface Props {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
  link?: string;
}

const Section = (props: Props) => {
    
  const { title, imgSrc, children, link } = props;

  return (
  
    <Box paddingBlock={5}>
      <Text fontSize={'2xl'}>
        {
          link ?
          (
            <HStack>
              <Link
                href={link}
                target="_blank"
              >
                {title}
              </Link>
              {link && <FiExternalLink size={20} /> }
            </HStack>
          )
          :
          (<>{title}</>)
        }
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
