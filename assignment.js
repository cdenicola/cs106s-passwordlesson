console.log("Hello World! I'm printing from `assignment.js`");

/* mapping transforms some (lowercase) letter input
   to a corrosponding number
   EX: mapping['a'] => 0
       mapping['b'] => 1
             ...
       mapping['z'] => 25
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
   alphabet => ["a", "b", "c", ..., "z"]
   Q: what is alphabet[14]? => "o"
*/
var alphabet = Object.keys(mapping);


// alphabet[mapping['a']] = 'a'


function Vigenere(plaintext, key) {
 //TODO
 return "temporary string"
}
