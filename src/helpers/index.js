export const toLocaleString = num =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

export const removeSpaces = num => num.toString().replace(/\s/g, '');

export const doMath = (a, b, operator) =>
  operator === '+'
    ? a + b
    : operator === '–'
    ? a - b
    : operator === 'X'
    ? a * b
    : a / b;
