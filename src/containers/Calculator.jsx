import React, { useState } from 'react';
import { Box, GridItem } from '@chakra-ui/react';
import Screen from '../components/Screen';
import ButtonBox from './ButtonBox';
import CalcButton from '../components/CalcButton';
import { toLocaleString, removeSpaces, doMath } from '../helpers';

const buttonVals = [
  ["AC", "+/–", "‹‹‹", "÷"],
  [7, 8, 9, "X"],
  [4, 5, 6, "–"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [ calc, setCalc ] = useState({
    operator: "",
    num: 0,
    result: 0,
  });
  const [ prevEquation, setPrevEquation ] = useState("");

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

// AC //
const resetHandler = () => {
  setCalc({
    ...calc,
    operator: "",
    num: 0,
    result: 0,
  });

  setPrevEquation("");
};

// +/– //
const invertHandler = () => {
  setCalc({
    ...calc,
    num: calc.num ? toLocaleString(removeSpaces(calc.num)) * -1 : 0,
    result: calc.result ? toLocaleString(removeSpaces(calc.result)) * -1 : 0,
    operator: "",
  });
};

// ‹‹‹ //
const deleteHandler = () => {
  if (removeSpaces(calc.num).length > 1) {
    const newNum = removeSpaces(calc.num).split('').slice(0, -1).join('');
    setCalc({
      ...calc,
      num: newNum
    })
  }
};

// = //
const equalsHandler = () => {
  if (calc.operator && calc.num) {

    setPrevEquation(`${calc.result} ${calc.operator} ${calc.num}`);

    setCalc({
      ...calc,
      result:
        calc.num === "0" && calc.operator === "/"
          ? "Err: can't divide by 0"
          : toLocaleString(
              doMath(
                Number(removeSpaces(calc.result)),
                Number(removeSpaces(calc.num)),
                calc.operator
              )
            ),
      operator: "",
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
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

// 0-9 //
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
      result: !calc.operator ? 0 : calc.result,
    });
  }
};

  return (
    <Box maxH="95vh" w="95vw" paddingTop={7}>
      <Screen value={calc.num ? calc.num : calc.result} prevVal={prevEquation} />
      <ButtonBox>
        {
          buttonVals.flat().map((btn, index) => (
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
          ))
        }
      </ButtonBox>
    </Box>
  );
};

export default Calculator;