const Cipher = () => {
  const caesar = (string, shift) => {
    const str = string.split('');
    const arrAscii = [];
    const arrChar = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === str[i].toUpperCase()) {
        str[i] = str[i].toLowerCase();
      }
  
      let item = str[i].charCodeAt();
      let ascii = item + shift;
  
      if (item >= 97 && item <= 122) {
        if (ascii > 122) {
          ascii = (item + shift) - 26;
        }
        arrAscii.push(ascii);
        arrChar.push(String.fromCharCode(arrAscii[i]))
      } else {
        return false;
      }
    }
    return arrChar.join('');
  }

  return { caesar };
}

export default Cipher;
