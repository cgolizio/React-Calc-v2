import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primary: '#736BFB',
    secondary: '#008C98',
    highlight: '#5EFBD6',
    dark: '#16161D',
    light: '#F8F8FF',
    warning: '#F4A054',
    danger: '#F45454',
  },
  textStyles: {
    xl: {
      fontSize: '10rem',
    },
    lg: {
      fontSize: '8rem',
    },
    md: {
      fontSize: '6rem',
    },
    sm: {
      fontSize: '4rem',
    },
    xs: {
      fontSize: '2rem',
    },
  },
  components: {
    Button,
  },
  fonts: {
    screen: 'JD LED5',
    button: 'Fontype Rounded',
  },
});
