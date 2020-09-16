import arrayAnalyze from '../modules/arrayAnalyze';

const analysis = arrayAnalyze();
const testingArray = [3, 10, 1, 5, 7];

test('Returns an Object', () => {
  const result = analysis.analyze([1, 2, 3]);
  expect( typeof result ).toBe('object');
});

test('Returns min value', () => {
  expect( analysis.analyze(testingArray).min).toBe(1);
});

test('Returns max value', () => {
  expect( analysis.analyze(testingArray).max).toBe(10);
});