const reverseString = () => {
  return {
    revertString: (string) => {
      if (string === '') {
        return string;
      } else {
        let reverted = '';
        for (let i = string.length - 1; i >= 0; i -= 1) {
          reverted = reverted.concat(string[i]);
        }
        return reverted;
      }
    }
  }
};

export default reverseString;