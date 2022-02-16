// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { Box, GridItem } from '@chakra-ui/react';
import Screen from './Screen';
import ButtonBox from '../../containers/ButtonBox';
import CalcButton from './CalcButton';
import { toLocaleString, removeCommas, doMath } from '../../helpers';

const buttonVals = [
  ['AC', '+/–', '‹‹‹', '÷'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '–'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => {
  const [calc, setCalc] = useState({
    operator: '',
    num: 0,
    result: 0,
  });
  const [prevEquation, setPrevEquation] = useState('');

  useEffect(() => {
    console.log('THIS IS CALC', calc);
  }, [calc]);

  const chooseVariant = btn => {
    let variant;
    if (btn === 'AC' || btn === '+/–' || btn === '‹‹‹') {
      variant = 'secondary';
    } else {
      if (typeof btn === 'number' || btn === '.') {
        variant = 'primary';
      } else {
        variant = 'highlight';
      }
    }
    return variant;
  };

  // AC //
  const resetHandler = () => {
    setCalc({
      ...calc,
      operator: '',
      num: 0,
      result: 0,
    });

    setPrevEquation('');
  };

  // +/– //
  const invertHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeCommas(calc.num)) * -1 : 0,
    });
  };

  // ‹‹‹ //
  const deleteHandler = () => {
    if (removeCommas(calc.num).length >= 1) {
      const newNum = removeCommas(calc.num).split('').slice(0, -1).join('');
      setCalc({
        ...calc,
        num: toLocaleString(newNum),
      });
    }
  };

  // = //
  const equalsHandler = () => {
    if (calc.operator && calc.num) {
      setPrevEquation(`${calc.result} ${calc.operator} ${calc.num}`);

      setCalc({
        ...calc,
        result:
          calc.num === '0' && calc.operator === '/'
            ? "Err: can't divide by 0"
            : toLocaleString(
                doMath(
                  Number(removeCommas(calc.result)),
                  Number(removeCommas(calc.num)),
                  calc.operator
                )
              ),
        operator: '',
        num: 0,
      });
    }
  };

  // ÷ X – + //
  const operatorHandler = e => {
    e.preventDefault();
    const value = e.target.textContent;
    setCalc({
      ...calc,
      operator: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };

  // . //
  const decimalHandler = e => {
    e.preventDefault();
    const value = e.target.textContent;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  // 0-9 //
  const numHandler = e => {
    e.preventDefault();
    const value = e.target.textContent;
    if (removeCommas(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : removeCommas(calc.num) % 1 === 0
            ? toLocaleString(Number(removeCommas(calc.num + value)))
            : toLocaleString(calc.num + value),
        result: !calc.operator ? 0 : calc.result,
      });
    }
  };

  return (
    <Box maxH="95vh" w="95vw" pt={7}>
      <Screen
        value={calc.num ? calc.num : calc.result}
        prevVal={prevEquation}
      />
      <ButtonBox>
        {buttonVals.flat().map((btn, index) => (
          <GridItem key={index} colSpan={btn === 0 ? 2 : 1} value={btn}>
            <CalcButton
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
                  ? operatorHandler
                  : btn === '.'
                  ? decimalHandler
                  : numHandler
              }
            />
          </GridItem>
        ))}
      </ButtonBox>
    </Box>
  );
};

export default Calculator;
