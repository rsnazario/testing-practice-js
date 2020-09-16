import Capital from '../modules/capitalize';

const capital = Capital();

test('Capitalize first letter', () => {
  expect(capital.capitalize('martin')).toEqual('Martin');
});
