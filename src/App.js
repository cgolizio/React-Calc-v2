import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { customTheme } from './styles/theme';
import Calculator from './containers/Calculator';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
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
