 // [Exercises 15] Makan Terus Rekursif
 // Logic Challenge - Makan Terus (Rekursif)

 function makanTerusRekursif(waktu) {
  // you can only write your code here!
  var jumlahMakan = 1;
  if (waktu <= 0) {
  	return 0;
  } else {
  	jumlahMakan = jumlahMakan + makanTerusRekursif(waktu - 15)
  }
  return jumlahMakan;
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0