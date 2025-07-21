import { useState } from 'react';
import generatePassword from './util/GeneratePassword';

function Generator() {
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleGenerate = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setShowForm(false);
  };

  const handleBindAndSave = () => {
    setShowForm(true);
  };

  return (

    <div>
        <h2>Generate a Password!</h2>
            <input
                type="text"
                placeholder="Your password will appear here"
                value={password}
                disabled
            />

<button onClick={handleGenerate}>Generate Password</button>
<button onClick={handleBindAndSave}>Bind and Save</button>

      {showForm && (
        <form>
            <div>
                <label>Account Name:</label>
                <input type="text" />
            </div>
            
            <div>
                <label>Account Email:</label>
                <input type="email" />
            </div>

            <div>
                <label>Password:</label>
                <input type="text" value={password} disabled />
            </div>

            <button type="submit">Save</button>
        </form>
      )}

    </div>
  );
}

export default Generator;