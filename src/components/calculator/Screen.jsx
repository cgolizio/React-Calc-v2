import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Screen = ({ value, prevVal }) => {
  return (
    <Flex
      h="15vh"
      w="100%"
      flexDir="column"
      textStyle="lg"
      fontFamily="screen"
      alignItems="flex-end"
      justifyContent="flex-end"
      p={2}
      pr={5}
      borderRadius="25px"
      bg="#000000"
      color="#F4D245"
      // border="1px solid ghostwhite"
      >
      <Box
        textStyle="xs"
        color="#fafafa"
      >
        {prevVal}
      </Box>
      {value}
    </Flex>
  )
}

export default Screen