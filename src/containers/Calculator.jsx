import React, { useState } from 'react';
import { Box, GridItem } from '@chakra-ui/react';
import Screen from '../components/Screen';
import ButtonBox from './ButtonBox';
import CalcButton from '../components/CalcButton';
import {
  resetHandler,
  invertHandler,
  deleteHandler,
  equalsHandler,
  signHandler,
  decimalHandler,
  numHandler
} from '../helpers'

const buttonVals = [
  ["AC", "+/–", "‹‹‹", "÷"],
  [7, 8, 9, "X"],
  [4, 5, 6, "–"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [ calc, setCalc ] = useState({
    sign: '',
    num: 0,
    result: 0,
  });

  const chooseVariant = (btn) => {
    let variant;
    if (btn === 'AC' || btn === '+/–' || btn === '‹‹‹') {
      variant = 'secondary'
    } else {
      if (typeof btn === 'number' || btn === '.') {
        variant = 'primary'
      } else {
        variant = 'highlight'
      }
    }
    return variant;
  };

  return (
    <Box maxH="95vh" w="95vw">
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {
          buttonVals.flat().map((btn, index) => (
            <GridItem colSpan={btn === 0 ? 2 : 1}>
              <CalcButton
                key={index}
                variant={chooseVariant(btn)}
                value={btn}
                onClick={
                  btn === 'AC'
                    ? resetHandler
                    : btn === '+/–'
                    ? invertHandler
                    : btn === '‹‹‹'
                    ? deleteHandler
                    : btn === '='
                    ? equalsHandler
                    : btn === '÷' || btn === 'X' || btn === '–' || btn === '+'
                    ? signHandler
                    : btn === '.'
                    ? decimalHandler
                    : numHandler
                }
              />
            </GridItem>
          ))
        }
      </ButtonBox>
    </Box>
  );
};

export default Calculator;