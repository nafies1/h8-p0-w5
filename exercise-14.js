// [Exercises 14] Password Generator
// Logic Challenge - Password Generator

function changeVocals (str) {
  //code di sini
  var arrAbjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var notVokal = '';
  for (var i = 0; i < str.length; i++) {
  	if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O'){
  		var index = arrAbjad.indexOf(str[i]);
  		notVokal += arrAbjad[index+1];
  	} else {
  		notVokal += str[i];
  	}
  }
  return notVokal;
}

function reverseWord (str) {
  //code di sini
  var notVokal = changeVocals(str);
  var reversed = '';
  for (var i = notVokal.length-1; i >= 0 ; i--) {
  	reversed += notVokal[i];
  }
  return reversed;
}

function setLowerUpperCase (str) {
  //code di sini
  var reversedWord = reverseWord(str);
  var setCase = '';
  for (var i = 0; i < reversedWord.length; i++) {
  	if (reversedWord[i].toUpperCase() === reversedWord[i]) {
  		setCase += reversedWord[i].toLowerCase();
  	} else{
  		setCase += reversedWord[i].toUpperCase();
  	}
  }
  return setCase;
}

function removeSpaces (str) {
  //code di sini
  var setCase = setLowerUpperCase(str);
  var removedSpaces = '';
  for (var i = 0; i < setCase.length; i++) {
  	if (setCase[i] !== ' '){
  		removedSpaces += setCase[i];
  	}
  }
  return removedSpaces;
}

function passwordGenerator (name) {
  //code di sini

  var generatedPassword = removeSpaces(name);
  if (generatedPassword.length >= 5) {
  	return generatedPassword;
  } else {
  	return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


// Diberikan function changeVocals, reverseWord, 
// setLowerUpperCase, removeSpaces, dan 
// passwordGenerator

// Pada function passwordGenerator implementasikan 
// requirement dibawah ini untuk membuat password 
// (harus berurutan):

// 1. Ganti semua huruf vokal menggunakan function 
// changeVocals dengan aturan huruf vokal yang 
// diganti akan menjadi huruf setelah huruf vokal itu 
// (ex: a -> b, i -> j, u -> v, e -> f, o -> p, 
// 	A -> B, I -> J, U -> V, E -> F, O -> P)

// 2. Balikkan/reverse kata yang sudah kita ganti 
// huruf vokalnya menggunakan reverseWord

// 3. Gunakan function setLowerUpperCase untuk 
// mengganti huruf besar menjadi kecil dan sebaliknya

// 4. Gunakan function removeSpaces untuk 
// menghilangkan semua spasi di dalam string yang
//  sudah kita manipulasi