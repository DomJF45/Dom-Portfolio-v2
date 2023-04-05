import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: GlobalStyleProps)=> ({
    body: {
      bg: mode('#e4deda', '#202023')(props),
      color: mode('#303030', 'rgba(255,255,255,.87)')(props),
    },
  })
}


const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
  body: `'M PLUS Rounded 1c', sans-serif`
}

const config: ThemeConfig = {
  //@ts-ignore
  initialColorMode: "dark",
  useSystemColorMode: false
}

const theme = extendTheme({ styles, config })
export default theme;
