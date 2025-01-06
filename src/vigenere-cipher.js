const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    let result = "";
    let j = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[A-Za-z]/.test(char)) {
        const shift = key[j % key.length].toUpperCase().charCodeAt(0) - 65;
        const base = char === char.toUpperCase() ? 65 : 97;
        result += String.fromCharCode(
          ((char.toUpperCase().charCodeAt(0) - 65 + shift) % 26) + base
        );
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect
      ? result.toUpperCase()
      : result.split("").reverse().join("");
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    let result = "";
    let j = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[A-Za-z]/.test(char)) {
        const shift = key[j % key.length].toUpperCase().charCodeAt(0) - 65;
        const base = char === char.toUpperCase() ? 65 : 97;
        result += String.fromCharCode(
          ((char.toUpperCase().charCodeAt(0) - 65 - shift + 26) % 26) + base
        );
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
