function generatePassword() {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@?#$';
  const allChars = lowercase + uppercase + numbers + symbols;

  const getRandomChar = str => str[Math.floor(Math.random() * str.length)];
  const length = Math.floor(Math.random() * 4) + 9; // 9–12

  let password = [
    getRandomChar(lowercase),
    getRandomChar(uppercase),
    getRandomChar(numbers),
    getRandomChar(symbols),
  ];

  while (password.length < length) {
    password.push(getRandomChar(allChars));
  }

  // Shuffle
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}

export default generatePassword;