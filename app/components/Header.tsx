import { Text } from '@chakra-ui/react'

interface Props {

  children: React.ReactNode;

}

const Header = (props: Props) => {

  const { children } = props;

  return(

    <Text fontSize={['lg', 'lg', '2xl']} fontWeight={700}>
      {children}
    </Text>

  )

}

export default Header;
