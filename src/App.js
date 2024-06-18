import React from 'react';
import EncryptForm from './components/EncryptForm';
import DecryptForm from './components/DecryptForm';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>CipherBridge</h1>
      <EncryptForm />
      <DecryptForm />
    </div>
  );
};

export default App;
