const arrayAnalyze = () => ({
  analyze: (array) => {
    const avgVal = Math.round(array.reduce((final, current) => final + current, 0) / array.length);
    const result = {
      min: Math.min(...array),
      max: Math.max(...array),
      average: avgVal,
      length: array.length,
    };
    return result;
  },
});

export default arrayAnalyze;