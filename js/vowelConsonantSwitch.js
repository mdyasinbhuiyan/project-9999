var letter = prompt();
letter = letter.toLowerCase();

switch (letter){
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write("This is Vowel");
    break;
  default:
    document.write("This is Consonant")
}