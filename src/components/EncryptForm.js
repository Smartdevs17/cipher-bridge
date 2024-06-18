import React, { useState } from 'react';
import caesarEncrypt from '../utils/caesarEncrypt';

const EncryptForm = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState(0);
  const [ciphertext, setCiphertext] = useState('');

  const handleEncrypt = () => {
    const result = caesarEncrypt(plaintext, key);
    setCiphertext(result);
  };

  return (
    <div>
      <h2>Encrypt</h2>
      <input
        type="text"
        value={plaintext}
        onChange={(e) => setPlaintext(e.target.value)}
        placeholder="Enter plaintext"
      />
      <input
        type="number"
        value={key}
        onChange={(e) => setKey(parseInt(e.target.value))}
        placeholder="Enter key"
      />
      <button className='encrypt-btn' onClick={handleEncrypt}>Encrypt</button>
      {ciphertext && <p>Ciphertext: {ciphertext}</p>}
    </div>
  );
};

export default EncryptForm;
