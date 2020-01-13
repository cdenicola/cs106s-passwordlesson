function VigenereHelper() {
  var plaintext = document.getElementById("plaintext").value
  var key = document.getElementById("key").value
  var cipherText = Vigenere(plaintext, key)
  ciphertext_element = document.getElementById("ciphertext")
  ciphertext_element.style = ""
  ciphertext_element.innerHTML = cipherText
}
