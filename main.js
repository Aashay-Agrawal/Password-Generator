document.addEventListener("DOMContentLoaded", function () {
  var passwordLengthInput = document.getElementById("password-length");
  var passwordLengthValue = document.getElementById("password-length-value");
  var generatePasswordButton = document.getElementById("generate-password");
  var generatedPasswordContainer =
    document.getElementById("generated-password");

  passwordLengthInput.addEventListener("input", function () {
    passwordLengthValue.textContent = passwordLengthInput.value;
  });

  generatePasswordButton.addEventListener("click", function () {
    var passwordLength = passwordLengthInput.value;
    var characterTypes = Array.from(
      document.querySelectorAll(".character-type:checked")
    ).map(function (element) {
      return element.value;
    });

    var generatedPassword = generatePassword(passwordLength, characterTypes);
    generatedPasswordContainer.textContent = generatedPassword;
  });

  function generatePassword(length, characterTypes) {
    var characters = "";

    if (characterTypes.includes("uppercase")) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (characterTypes.includes("lowercase")) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (characterTypes.includes("numbers")) {
      characters += "0123456789";
    }

    if (characterTypes.includes("special")) {
      characters += "!@#$%^&*()-_=+[{]};:,<.>/?";
    }

    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  }
});
