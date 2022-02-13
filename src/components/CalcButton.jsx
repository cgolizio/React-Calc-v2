import React from 'react';
import { Button } from '@chakra-ui/react';

const CalcButton = ({ variant, value, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {value}
    </Button>
  )
}

export default CalcButton