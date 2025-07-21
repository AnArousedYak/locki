import { useState } from 'react';
import generatePassword from './util/GeneratePassword';

function Generator() {
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  return (
    <div>
      <h2>Generate a Password!</h2>
      <input
        type="text"
        placeholder="Your new password will appear here"
        value={password}
        disabled
      />
      <button onClick={handleGenerate}>Generate Password</button>
    </div>
  );
}

export default Generator;