const arrayAnalyze = () => {
  return {
    analyze : (array) => {
      var averageValue = Math.round(array.reduce( (final, current) => final + current, 0)/array.length);
      var result = {
        min: Math.min( ...array),
        max: Math.max( ...array),
        average: averageValue,
        length: array.length
      };
      return result;
    }
  }
};

export default arrayAnalyze;