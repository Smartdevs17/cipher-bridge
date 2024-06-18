import React, { useState } from 'react';
import caesarDecrypt from '../utils/caesarDecrypt';

const DecryptForm = () => {
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState('');
  const [plaintext, setPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = () => {
    if (!ciphertext || !key) {
      setError('Both ciphertext and key are required.');
      return;
    }
    if (isNaN(key)) {
      setError('Key must be a number.');
      return;
    }

    setError('');
    const result = caesarDecrypt(ciphertext, parseInt(key));
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
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <button className='decrypt-btn' onClick={handleDecrypt}>Decrypt</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {plaintext && <p>Plaintext: {plaintext}</p>}
    </div>
  );
};

export default DecryptForm;
