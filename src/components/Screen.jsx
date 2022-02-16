import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Screen = ({ value, prevVal }) => {
  return (
    <Flex
      h="15vh"
      w="100%"
      flexDir="column"
      textStyle="lg"
      alignItems="flex-end"
      justifyContent="flex-end"
      p={2}
      paddingRight={5}
      borderRadius="25px"
      bg="#000000"
      color="#F4D245"
      // border="1px solid ghostwhite"
      >
      <Box
        justifySelf="flex-start"
        textStyle="xs"
        color="#aeaeae"
      >
        {prevVal}
      </Box>
      {value}
    </Flex>
  )
}

export default Screen