import { Text } from '@chakra-ui/react'

const ResumeBody = ({children}:{children: React.ReactNode}) => {

  return (

    <Text fontSize={['sm', 'sm', 'md']}>
      {children}
    </Text>

  )

}

export default ResumeBody;
