/* Handles submit button */
function submitPassword() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var encrypted_password = passwordEncrypter(password)
  display_element = document.getElementById("encryptedPass")
  display_element.style = ""
  display_element.innerHTML = encrypted_password
}

function encryptionCracker() {
  var encrypted_msg = document.getElementById("encryption").value
  var decrypted_msg = substitutionDecrypter(encrypted_msg)
  decrypted_element = document.getElementById("decryptedMsg")
  decrypted_element.style = ""
  decrypted_element.innerHTML = decrypted_msg
}
