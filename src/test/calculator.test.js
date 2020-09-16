import Calculator from '../modules/calculator';

const calculator = Calculator();

test('Calculator Add operation', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('Calculator subtract operation', () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test('Calculator subtract operation', () => {
  expect(calculator.divide(12, 4)).toBe(3);
});
