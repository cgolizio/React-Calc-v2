import React from 'react';
import { Flex } from '@chakra-ui/react';

const Screen = ({ value }) => {
  return (
    <Flex
      h="15vh"
      w="100%"
      textStyle="lg"
      alignItems="flex-end"
      justifyContent="flex-end"
      p={2}
      borderRadius="25px"
      bg="#000000"
      color="#F4D245"
      // color="#aeaeae"
      // border="1px solid ghostwhite"
    >
      {value}
    </Flex>
  )
}

export default Screen