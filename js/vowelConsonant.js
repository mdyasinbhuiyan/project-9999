var letter = prompt("Enter Letter : ")
letter = letter.toLowerCase()

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
  document.write("The letter is vowel")
} else{
  document.write("The letter is consonant")
}