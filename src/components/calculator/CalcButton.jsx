import React from 'react';
import { Button } from '@chakra-ui/react';

const CalcButton = ({ variant, value, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick} fontFamily='Fontype Rounded'>
      {value}
    </Button>
  )
}

export default CalcButton