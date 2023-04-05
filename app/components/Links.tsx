"use client"
import { Box, Text, Stack, Link, Divider } from '@chakra-ui/react'
import CoolLink from './CoolLink'

const Links = () => {

  const handleDownload = () => {
    fetch('dominick-founds-resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'dominick-founds-resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <Box 
      width={'100%'}
    >
      <Text
        fontSize={'2xl'}
      >
        Links
      </Text>
      <Divider width={'50px'} />
      <Stack paddingBlock={10} fontSize={'md'} width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
        <CoolLink func={handleDownload} title={'Resume - Download PDF'} newWindow={false} />
        <CoolLink title={'GitHub'} newWindow={true} link={'https://github.com/DomJF45'} /> 
        <CoolLink title={'LinkedIn'} newWindow={true} link={'https://www.linkedin.com/in/dominick-founds-726a161a4/'} />
      </Stack>
    </Box>
  )
}

export default Links;
