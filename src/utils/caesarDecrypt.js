import caesarEncrypt from './caesarEncrypt';

const caesarDecrypt = (text, key) => {
  return caesarEncrypt(text, 26 - (key % 26));
};

export default caesarDecrypt;
