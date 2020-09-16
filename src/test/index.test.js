import { Functions } from '../index';

const functions = Functions();

test('Capitalize first letter', () => {
  expect(functions.capitalize('martin')).toEqual('Martin');
});