import { Functions } from '../index';

const functions = Functions();

test('Capitalize first letter', () => {
  expect(functions.capitalize('martin')).toEqual('Martin');
});

test('Reverse string', () => {
  expect(functions.reverse('martin')).toEqual('nitram');
});
