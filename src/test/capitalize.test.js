import Capital from '../modules/capitalize';

describe('Testing Capitalize String', () => {
  const capital = Capital();

  test('Capitalize first letter', () => {
    expect(capital.capitalize('martin')).toEqual('Martin');
  });
});
