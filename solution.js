console.log("Hello World! I'm printing from `assignment.js`");

/*
 *
 */
function passwordEncrypter(password) {
  return password;
}



function substitutionDecrypter(encrypted_msg) {
  return encrypted_msg;
}



// WORK FROM LAST WEEK — USE FOR CODING ASSIGNMENT

/* mapping transforms some (lowercase) letter input
 * to a corrosponding number
 *   EX: mapping['a'] => 0
 *       mapping['b'] => 1
 *             ...
 *       mapping['z'] => 25
 */
var mapping = {
  "a": 0,  "b": 1,  "c": 2,  "d": 3,  "e": 4,
  "f": 5,  "g": 6,  "h": 7,  "i": 8,  "j": 9,
  "k": 10, "l": 11, "m": 12, "n": 13, "o": 14,
  "p": 15, "q": 16, "r": 17, "s": 18, "t": 19,
  "u": 20, "v": 21, "w": 22, "x": 23, "y": 24,
  "z": 25
}

/* Creates an array containg (lowercase) alphabet letters
 * alphabet => ["a", "b", "c", ..., "z"]
 * Q: what is alphabet[14]? => "o"
 */
var alphabet = Object.keys(mapping);

/*
 * Shifts the given letter by a given length.
 * ----
 * Params:
 * > original - letter you'd like to shift
 * > shift - length to transpose letters by
 *
 * Returns:
 * > char - shifted letter
 */

function shiftLetter(original, shift) {
  var origNum = mapping[original];
  var shiftedNum = (origNum + shift) % 26;
  var shiftedLetter = alphabet[shiftedNum];
  return shiftedLetter
}


/*
 * Encrypts the given string using the Caesar cipher and the given length.
 * ----
 * Params:
 * > original - string you would like to encrypt
 * > shift - given transposition length
 *
 * Returns:
 * > string - the encrypted version of the given string using the given length
 */

function encryptCaesar(original, shift) {
  var finalStr = "";
  for (var i = 0; i < original.length; i++) {
    var shifted = shiftLetter(original[i], shift);
    finalStr += shifted;
  }
  return finalStr;
}


/*
 * Determines whether the first string is the encrypted version of the second with a given encryption length.
 * ----
 * Params:
 * > encrypted - given encryption
 * > shift - given transposition length
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess with given length
 */

function checkCaesarWithShift(encrypted, shift, guess) {
  return encryptCaesar(guess, shift) === encrypted;
}


/*
 * Determines whether the first string is the encrypted version of the second.
 * Try to use checkCaesarWithShift!
 * ----
 * Params:
 * > encrypted - given encryption
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess
 */

function checkCaesar(encrypted, guess) {
  var shift = mapping[encrypted[0]] - mapping[guess[0]];
  return checkCaesarWithShift(encrypted, shift, guess);
}


/*
 * *** Last week's Extension ***
 *   If you completed this, try it for your encryption function
 * ----
 * Encrypts the given string using the Vigenere cipher and the given keyword.
 * ----
 * Params:
 * > original - string you would like to encrypt
 * > length - given keyword
 *
 * Returns:
 * > string - the encrypted version of the given string using the given keyword
 */

function encryptVigenere(original, keyword) {

}
