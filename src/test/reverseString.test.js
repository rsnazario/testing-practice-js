import reverseString from '../modules/reverseString';

describe('Testing Reverse String', () => {
  const reverter = reverseString();

  test('Reverse a full string', () => {
    expect(reverter.revertString('12345')).toEqual('54321');
  });

  test('Reverse empty', () => {
    expect(reverter.revertString('')).toEqual('');
  });
});