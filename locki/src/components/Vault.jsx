function Vault() {
    //fake data for now
  const userData = [
    { id: 1, account: 'Gmail', email: 'user@gmail.com', password: '••••••••' },
    { id: 2, account: 'Facebook', email: 'fbuser@fb.com', password: '••••••••' },
    { id: 3, account: 'Banking App', email: 'moneyboss@bank.com', password: '••••••••' }
  ];

  return (
    <div>
      <h2>Your Vault</h2>
      <table>

        <thead>
          <tr>
            <th>Account</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {userData.map(entry => (
            <tr key={entry.id}>
              <td>{entry.account}</td>
              <td>{entry.email}</td>
              <td>{entry.password}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Vault;
