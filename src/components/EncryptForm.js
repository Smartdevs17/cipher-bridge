import React, { useState } from 'react';
import caesarEncrypt from '../utils/caesarEncrypt';

const EncryptForm = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [error, setError] = useState('');

  const handleEncrypt = () => {
    if (!plaintext || !key) {
      setError('Both plaintext and key are required.');
      return;
    }
    if (isNaN(key)) {
      setError('Key must be a number.');
      return;
    }

    setError('');
    const result = caesarEncrypt(plaintext, parseInt(key));
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
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <button className='encrypt-btn' onClick={handleEncrypt}>Encrypt</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {ciphertext && <p>Ciphertext: {ciphertext}</p>}
    </div>
  );
};

export default EncryptForm;
