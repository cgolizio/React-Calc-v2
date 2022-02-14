import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { customTheme } from './styles/theme';
import Calculator from './containers/Calculator';
import Fonts from './styles/Fonts';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Box textAlign="center" fontSize="xl" minH="100vh" minW="100vw">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center>
          <Calculator justifySelf="center" alignSelf="center" />
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
