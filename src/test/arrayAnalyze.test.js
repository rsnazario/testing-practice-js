import arrayAnalyze from '../modules/arrayAnalyze';

test('Returns an Object', () => {
  const analysis = arrayAnalyze();
  const result = analysis.analyze([1, 2, 3]);
  expect( typeof result ).toBe('object');
});