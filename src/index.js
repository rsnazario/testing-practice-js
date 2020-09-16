const Functions = () => {
  const capitalize = (string) => {
    string = string.split('');
    const str = string[0].toUpperCase();
    string[0] = str;
    return string.join('');
  };

  const reverse = (string) => {
  };

  return { capitalize, reverse };
};

module.exports = {
  Functions,
};
