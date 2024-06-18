import React, { useState } from 'react';
import caesarDecrypt from '../utils/caesarDecrypt';

const DecryptForm = () => {
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState(0);
  const [plaintext, setPlaintext] = useState('');

  const handleDecrypt = () => {
    const result = caesarDecrypt(ciphertext, key);
    setPlaintext(result);
  };

  return (
    <div>
      <h2>Decrypt</h2>
      <input
        type="text"
        value={ciphertext}
        onChange={(e) => setCiphertext(e.target.value)}
        placeholder="Enter ciphertext"
      />
      <input
        type="number"
        value={key}
        onChange={(e) => setKey(parseInt(e.target.value))}
        placeholder="Enter key"
      />
      <button onClick={handleDecrypt}>Decrypt</button>
      {plaintext && <p>Plaintext: {plaintext}</p>}
    </div>
  );
};

export default DecryptForm;
