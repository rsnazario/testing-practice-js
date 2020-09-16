const Capital = () => {
  const capitalize = (string) => {
    string = string.split('');
    const str = string[0].toUpperCase();
    string[0] = str;
    return string.join('');
  };

  return { capitalize };
};

export default Capital;
