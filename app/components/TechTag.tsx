import React from 'react';
import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface Props {
  name: string;
  icon: React.ReactNode;
  index: number;
  filter: string;
  lightScheme: string;
  darkScheme: string;
}

const TechTag = (props: Props) => {

  const { name, icon, lightScheme, darkScheme, index } = props;

  return (

   <Box
    width={['150px', '150px', '190px']}
    height={['55px', '55px', '75px']}
    justifyContent={'start'}
    paddingInline={'10px'}
    alignItems={'center'}
    display={'flex'}
    backgroundColor={useColorModeValue(lightScheme, darkScheme)}
    borderRadius={'8px'}
  >
    { icon }
    <Text
      as={'h2'}
      fontSize={'md'}
      fontWeight={500}
      paddingInline={'10px'}
    >
      { name }
    </Text> 
  </Box> 

  )

}

export default TechTag;
