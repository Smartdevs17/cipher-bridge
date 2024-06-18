const caesarEncrypt = (text, key) => {
    return text.split('').map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        let shiftedCode;
        if (code >= 65 && code <= 90) {
          shiftedCode = ((code - 65 + key) % 26) + 65;
        } else if (code >= 97 && code <= 122) {
          shiftedCode = ((code - 97 + key) % 26) + 97;
        }
        return String.fromCharCode(shiftedCode);
      }
      return char;
    }).join('');
  };
  
  export default caesarEncrypt;
  