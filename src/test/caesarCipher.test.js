import Cipher from '../modules/caesarCipher';

describe('Testing Caesar Cipher', () => {
  const cipher = Cipher();

  test('test normal string', () => {
    expect(cipher.caesar('abc', 3)).toBe('def');
  });

  test('test keeping the same case', () => {
    expect(cipher.caesar('Abc', 3)).toBe('def');
  });

  test('test if character is string', () => {
    expect(cipher.caesar('"&%932!"', 3)).toBeFalsy();
  });

  test('test if there is a space in string', () => {
    expect(cipher.caesar('a ', 3)).toBeFalsy();
  });
});