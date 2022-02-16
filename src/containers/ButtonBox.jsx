/* eslint-disable no-lone-blocks */
import { Grid } from '@chakra-ui/react';
import React from 'react';

const ButtonBox = ({ children }) => {
  return (
          <Grid
            minH="82vh"
            p={3}
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(5, 1fr)"
            gap={2}
          >
            {children}
          </Grid>
  )
}

export default ButtonBox;