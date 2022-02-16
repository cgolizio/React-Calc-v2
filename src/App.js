import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import { customTheme } from './styles/theme';
import Calculator from './components/calculator';
import './styles/fonts/screen-fonts/JdLed5Regular-oRdA.ttf';
import './styles/fonts/button-fonts/FontypeRounded-rgJJ7.ttf';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl" minH="100vh" minW="100vw">
        <Center>
          <Calculator justifySelf="center" alignSelf="center" />
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
