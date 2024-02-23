document.addEventListener("DOMContentLoaded", function () {
  const lowerCase = document.querySelector(".includeLowerCase");
  const upperCase = document.querySelector(".includeUpperCase");
  const numbers = document.querySelector(".includeNumbers");
  const symbols = document.querySelector(".includeSymbols");
  const sliderInput = document.getElementById("myRange");

  function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
      return `(password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
      return `(At least 1 set of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    return password;
  }

  function updatePassword() {
    const passwordLength = sliderInput.value;
    const includeLowercase = lowerCase.checked;
    const includeUppercase = upperCase.checked;
    const includeNumbers = numbers.checked;
    const includeSymbols = symbols.checked;

    const password = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );

    document.getElementById("generatedPassword").innerText = password;
  }
  lowerCase.addEventListener("change", updatePassword);
  upperCase.addEventListener("change", updatePassword);
  numbers.addEventListener("change", updatePassword);
  symbols.addEventListener("change", updatePassword);
  sliderInput.addEventListener("input", updatePassword);
});
