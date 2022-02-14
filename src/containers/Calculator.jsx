import React, { useState, useEffect } from 'react';
import { Box, GridItem } from '@chakra-ui/react';
import Screen from '../components/Screen';
import ButtonBox from './ButtonBox';
import CalcButton from '../components/CalcButton';

const buttonVals = [
  ["AC", "+/–", "‹‹‹", "÷"],
  [7, 8, 9, "X"],
  [4, 5, 6, "–"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {
  const [ calc, setCalc ] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  useEffect(() => {
    console.log('CALC (INSIDE useEffect)', calc)
  }, [calc])

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

const resetHandler = () => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    result: 0,
  });
};

const invertHandler = () => {
  setCalc({
    ...calc,
    num: calc.num ? toLocaleString(removeSpaces(calc.num)) * -1 : 0,
    result: calc.result ? toLocaleString(removeSpaces(calc.result)) * -1 : 0,
    sign: "",
  });
};

const deleteHandler = e => {
  e.preventDefault();
  const value = e.target.textContent;
};

const equalsHandler = () => {
  if (calc.sign && calc.num) {
    const doMath = (a, b, sign) => (
      sign === "+"
        ? a + b
        : sign === "–"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b
    );

    setCalc({
      ...calc,
      result:
        calc.num === "0" && calc.sign === "/"
          ? "Err: can't divide by 0"
          : toLocaleString(
              doMath(
                Number(removeSpaces(calc.result)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
      sign: "",
      num: 0,
    })
  }
};

const signHandler = e => {
  e.preventDefault();
  const value = e.target.textContent;
  setCalc({
    ...calc,
    sign: value,
    result: !calc.result && calc.num ? calc.num : calc.result,
    num: 0,
  });
};

const decimalHandler = e => {
  e.preventDefault();
  const value = e.target.textContent;
  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

const numHandler = e => {
  e.preventDefault();
  const value = e.target.textContent;
  // console.log('VALUE (INSIDE numHandler)', value);
  if (removeSpaces(calc.num).length < 16) {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : removeSpaces(calc.num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(calc.num + value)))
          : toLocaleString(calc.num + value),
      result: !calc.sign ? 0 : calc.result,
    });
  }
};

  return (
    <Box maxH="95vh" w="95vw">
      <Screen value={calc.num ? calc.num : calc.result} />
      <ButtonBox>
        {
          buttonVals.flat().map((btn, index) => (
            <GridItem key={index} colSpan={btn === 0 ? 2 : 1} value={btn}>
              <CalcButton
                // key={index}
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