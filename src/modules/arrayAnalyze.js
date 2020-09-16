const arrayAnalyze = () => {
  return {
    analyze : (array) => {
      var result = {
        min: Math.min( ...array),
      };
      return result;
    }
  }
};

export default arrayAnalyze;