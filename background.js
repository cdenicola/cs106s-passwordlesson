/* Handles submit buttons */
//Login Here!
function submitPassword() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  if (password.length == 0) {
    return
  }
  var encrypted_password = passwordEncrypter(password)
  var display_element = document.getElementById("encryptedPass")
  display_element.style = ""
  display_element.innerHTML = encrypted_password
}

//Password Decrypter
function encryptionCracker() {
  var encrypted_msg = document.getElementById("encryptedPass").innerHTML
  var decrypted_msg = passwordCracker(encrypted_msg)
  decrypted_element = document.getElementById("decryptedPass")
  decrypted_element.style = ""
  decrypted_element.innerHTML = decrypted_msg
}

//Substitution Cipher Cracker
first_pass = 0
function decryptBook() {
  if (first_pass) {
    return
  }
  first_pass = 1
  var decrypted_element = document.getElementById("book")
  decrypted_element.style = ""
  decrypted_element.innerHTML = substitutionDecrypter(decrypted_element.innerHTML)
}
