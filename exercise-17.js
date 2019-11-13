 // [Exercises 17] Kali Terus Rekursif
 // Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strAngka = String(angka);
  var hasil = 1;
  for (var i = 0; i < strAngka.length; i++) {
  	hasil *= Number(strAngka[i]);
  }
  var strHasil = String(hasil);
  if (strHasil.length === 1) {
  	return hasil;
  } else {
  	hasil = kaliTerusRekursif(hasil);
  }
  return hasil;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6