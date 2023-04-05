import { LinkBox, LinkOverlay, Stack, Box, Link, Text, useColorModeValue, useColorMode } from '@chakra-ui/react'

interface Props {
  title: string;
  link?: string;
  newWindow: boolean;
  func?: () => void; 
}

const CoolLink = (props: Props) => {
  
  const mode = useColorMode();

  const { title, link, newWindow, func } = props;

  return (
  
    <LinkBox
      display={'flex'}
      width={'100%'}
      backgroundColor={useColorModeValue('#30303018', 'rgba(255,255,255,.10)')}
      height={'60px'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'10px'}
      transition={'.3s ease-in-out'}
      cursor={'pointer'}
      boxShadow={mode.colorMode === 'light' ? 'sm' : 'none' }
      _hover={{
        transform: 'scale(1.02)'
      }}
      onClick={func}
    >
      <LinkOverlay
        href={link}
        target={newWindow ? "_blank" : ""}
      >
        {title}
      </LinkOverlay>
    </LinkBox>

  )

}

export default CoolLink;
