
console.log("Hello World! I'm printing from `assignment.js`");
const CAESAR_SHIFT = 10


/* * * * * * * * * * * * * * * * * * * * * * * *
                  Password
* * * * * * * * * * * * * * * * * * * * * * * */

/* PART 1
 * Encrypts password using Caesar Cipher
 * ----
 * Params:
 * > password - plaintext password that we want to encrypt
 *
 * Returns:
 * > string - encrypted (ciphertext) password
 */
function passwordEncrypter(password) {
  return encryptCaesar(password, CAESAR_SHIFT)
}


/* PART 2
 * Breaks Substitution Cipher
 * ----
 * Params:
 * > encryptedPassword - encrypted ciphertext password that we want to break
 *
 * Returns:
 * > string - plaintext password
 */
function passwordCracker(encryptedPassword) {
  var undoShift = (26 - CAESAR_SHIFT) % 26
  return encryptCaesar(encryptedPassword, undoShift)
}

/* * * * * * * * * * * * * * * * * * * * * * * *
  Substitution Cipher Cracker
* * * * * * * * * * * * * * * * * * * * * * * */

/*
 * Breaks Subsitution Cipher
 * ----
 * Params:
 * > encrypted_msg - encrypted ciphertext message that we want to break
 *
 * Returns:
 * > string - encrypted (ciphertext) password
 */
function substitutionDecrypter(encrypted_msg) {
  //TODO: Find Word Frequences

  /* Below is an example of a map/dictionary (both names are used)
   * It maps a key (ie: "a") to a value (ie: "0")
   * IN JS, use it like a vector.
   *     map[key] => value
   */
  var letter_frequency = {
    "a": 0, "b": 0, "c": 0, "d": 0, "e": 0,
    "f": 0, "g": 0, "h": 0, "i": 0, "j": 0,
    "k": 0, "l": 0, "m": 0, "n": 0, "o": 0,
    "p": 0, "q": 0, "r": 0, "s": 0, "t": 0,
    "u": 0, "v": 0, "w": 0, "x": 0, "y": 0,
    "z": 0
  }

  encrypted_msg = encrypted_msg.toLowerCase()
  for (var i = 0; i < encrypted_msg.length; i++)
  {
    if (isLetter(encrypted_msg[i])) {
      letter_frequency[encrypted_msg[i]] += 1
    }
  }

  //TODO: Use createFrequencyMap function
  var substitution_key = createFrequencyMap(letter_frequency)
  //Q: What is this key?

  //TODO: Use substitution_key to translate the text automatically
  var plaintext = ""
  for (var i = 0; i < encrypted_msg.length; i++)
  {
    var char = encrypted_msg[i]
    if (isLetter(char)) {
      char = substitution_key[mapping[char]]
    }
    plaintext += char
  }
  return plaintext
}

// Part 3 Helpers;



/* * * * * * * * * * * * * * * * * * * * * * * *
  WORK FROM LAST WEEK — USE FOR CODING ASSIGNMENT
* * * * * * * * * * * * * * * * * * * * * * * */
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
  if (!isLetter(original)) {
    return original
  }
  var origNum = mapping[original.toLowerCase()];
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




// Custom Helper Functions for this Assignment

/* Checks if character is a letter
 * ----
 * Params:
 * > character - single character to check
 *
 * Returns:
 * > bool - true if character is letter (a-z, A-Z), false otherwise
 */
function isLetter(character) {
  return character.toLowerCase() != character.toUpperCase();
}


function createFrequencyMap(frequencyAnalysis) {
  var sorted = Object.keys(frequencyAnalysis).sort(
    function(a,b) {return frequencyAnalysis[a] - frequencyAnalysis[b]
  });
  var key = ""
  var sorted_key_map = [3, 24, 8, 11, 15, 20, 23, 7, 19, 24, 6, 5, 21,  4, 12, 18, 17, 22, 16, 1, 10, 0, 25, 14, 13, 2]
  //[1, 7, 22, 15, 16, 0, 24, 6, 19, 7, 21, 11, 5, 14, 8, 12, 9, 13, 25, 23, 4, 10, 18, 20, 17, 3]
  for (let pos in sorted_key_map) {
    key += sorted[sorted_key_map[pos]]
  }
  return key
}
