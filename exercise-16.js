// [Exercises 16] Total Digit Rekursif
// Logic Challenge - Total Digit (Rekursif)

function totalDigitRekursif(angka) {
  // you can only write your code here!
  var strAngka = String(angka);
  var hasil = 0;
  if (strAngka === '') {
  	return 0;
  } else {
  	hasil = Number(strAngka[0]) + totalDigitRekursif(strAngka.slice(1))
  }
  return hasil;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5