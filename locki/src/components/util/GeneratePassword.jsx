
function generatePassword() {
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const symbolCharacters = '!@?#$';
  const allAvailableCharacters = lowercaseCharacters + uppercaseCharacters + numericCharacters + symbolCharacters;

  const getRandomCharacterFrom = characterSet =>
    characterSet[Math.floor(Math.random() * characterSet.length)];

  const passwordLength = Math.floor(Math.random() * 4) + 9; //between 9-12

  const passwordCharacterArray = [
    getRandomCharacterFrom(lowercaseCharacters),
    getRandomCharacterFrom(uppercaseCharacters),
    getRandomCharacterFrom(numericCharacters),
    getRandomCharacterFrom(symbolCharacters),
  ];

  while (passwordCharacterArray.length < passwordLength) {
    passwordCharacterArray.push(getRandomCharacterFrom(allAvailableCharacters));
  }

  // knuth shuffle for efficiency and randomness
  for (let index = passwordCharacterArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [passwordCharacterArray[index], passwordCharacterArray[randomIndex]] = [
      passwordCharacterArray[randomIndex],
      passwordCharacterArray[index],
    ];
  }

  return passwordCharacterArray.join('');
}

export default generatePassword;