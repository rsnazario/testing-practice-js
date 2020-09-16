import Cipher from '../modules/caesarCipher';

describe('Testing Caesar Cipher', () => {
  const cipher = Cipher();

  test('test normal string', () => {
    expect(cipher.caesar('abc', 3)).toBe('def');
  });
});