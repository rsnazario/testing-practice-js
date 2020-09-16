import Calculator from '../modules/calculator';

const calculator = Calculator();

test('Capitalize first letter', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

