// function namaFungsi(parameter1, parameter2) {
//   // Blok kode yang akan dieksekusi
//   // Di sini Anda bisa menggunakan parameter
//   return hasil; // Mengembalikan nilai (opsional)
// }

// Fungsi tanpa parameter dan tanpa return
// function sapa() {
//   console.log("Halo, selamat datang!");
// }

// sapa(); // Memanggil fungsi

// // Fungsi dengan parameter
// function sapaNama(nama) {
//   console.log("Halo, " + nama + "!");
// }

// sapaNama("Budi"); // Output: Halo, Budi!

// // Fungsi dengan parameter dan return
// function tambah(angka1, angka2) {
//   return angka1 + angka2;
// }

// let hasil = tambah(5, 3);
// console.log(hasil); // Output: 8

// function rataRata(nilai1, nilai2, nilai3) {
//   let nilaiRataRata;
//   nilaiRataRata = (nilai1 + nilai2 + nilai3) / 3;

//   return nilaiRataRata;
// }

// hasilRataRata = rataRata(70, 80, 90);
// console.log(hasilRataRata);

// function cekGenapGanjil(angka) {
//   if (angka % 2 === 0) {
//     console.log("Angka Genap");
//   } else {
//     console.log("Angka Ganjil");
//   }
// }
// cekGenapGanjil(10);

// function jumlahDuaVolumeKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;
//   volumeA = a * a*a*;
//   volumeB = b * b * b *;
//   total = volumeA + volumeB;
//   return total
// }

// arguments array yang berisi nilai yang di kirim saat function di panggil*

// function jumlah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// console.log(jumlah(2, 3, 4, 5, 6, 7));

// Refactoring(LEARN AGAIN) proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalisanya
// Readabily ketermudahan dalam pembacaan
// DRY(Don't Repeat Yourself)
// testability memudahkan pengujian
// performance
// maintenanceability

// function jumlahDuaVolumeKubus(a, b) {
//   var total = a ** 3 + b ** 3;
//   return total;
// }
// console.log(jumlahDuaVolumeKubus(8, 3));

// function duplicateArray(array) {
//   array.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i - 1]) {
//       return true;
//     }
//   }
// }

// var ray = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];
// console.log(duplicateArray(ray));\

// block scope(C, C++, dsb.) dan function scope (JavaScript)

// Rekursif sebuah fungsi yang memanggil dirinya sendiri, sama seperti looping  bisa terjadi infinity call stack, cara agar tidak terjadi infinity membuat BASE CASE yaitu kondisi akhir dari rekusif yang menghasilkan nilai, Kosep matematik yang umum digunakan dalam recursion adalah factorial

// IMPLEMENTASI RECURSION
//menggantikan looping
// Fibonacci
// pencarian dan penelusuran struktur data list dan tree
// intelejensi buatan
// BackTracking
// Pembuatan game seperti memntukan kolisi antar objek. dll

// Infinity
// function cetaklAngka(n) {
//   console.log(n);
//   return cetaklAngka(n - 1);
// }

// cetaklAngka(10)

// BASE CASE

// function cetaklAngka(n) {
//   // BASE CASE
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   // ReCurtion
//   cetaklAngka(n - 1);
// }

// function faktorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * faktorial(n - 1);
// }

// FUNTION DECLARATION DAN FUNCTION EXPRESSION
// struktur DECLARATION
// function indetifier (ParameterList"optional"){functionBody}
// struktur EXPRESSION
// function indetifier "optional" (ParameterList"optional"){functionBody}
// var functionExpression = function (ParameterList"optional"){functionBody} how to write FUNCTION EXPRESSION Right way

// PERBEDAAN
// FUNTION DECLARATION
// LEBIH FLEXIBEL KARENA KONSEP HOISTING

// FUNCTION EXPRESSION
// HARUS DI DEFINISIKAN TERLEBIH DAHULU SEBELUM DI PANGGIL SEPERTI VARIABLE PADA UMUMNYA
// LEBIH POWERFULL
// SEBAGAI CLOUSURE
// SEBAGAI ARGUMENT UNTUK FUNGSI LAIN
// IIFE(Immmediately Invoke Function Exspression)

// ES6(ECMAScript 2015);
// ARROW function

// const sapa = () => {
//   console.log("Halo, selamat datang!");
// };

// // Cara biasa
// const sapaNama = function (nama) {
//   console.log("Halo, " + nama + "!");
// };

// // Arrow Function
// const sapaNama = (nama) => {
//   console.log("Halo, " + nama + "!");
// };

// // Sintaks yang lebih ringkas (tanpa tanda kurung)
// const sapaNama = (nama) => {
//   console.log("Halo, " + nama + "!");
// };

// Dua Parameter atau Lebih: Tanda kurung () harus tetap digunakan.
// const tambah = (angka1, angka2) => {
//   return angka1 + angka2;
// };

// // Cara biasa
// const tambah = (angka1, angka2) => {
//   return angka1 + angka2;
// };

// // Arrow Function dengan return implisit
// const tambahSingkat = (angka1, angka2) => angka1 + angka2;

// const rataRata = (nilai1, nilai2, nilai3) => {
//   let nilaiRataRata = (nilai1 + nilai2 + nilai3) / 3;
//   return nilaiRataRata;
// };
// // Refactoring
// const rataRata = (nilai1, nilai2, nilai3) => {
//   const nilaiRataRata = (nilai1 + nilai2 + nilai3) / 3;
//   return nilaiRataRata;
// };
// // Refactoring
// const rataRata = (nilai1, nilai2, nilai3) => (nilai1 + nilai2 + nilai3) / 3;

// hasilRataRata = rataRata(70, 80, 90);
// console.log(hasilRataRata);

// const perkalian = (x, y) => x * y;

// const cekAngka = (angka) => (angka > 10 ? true : false);

// hasil = perkalian(20, 30);
// hasil2 = cekAngka(11);

// console.log(hasil, hasil2);

// Function Multiple Return Values dengan Array
// function hitungData(a, b) {
//   const penjumlahan = a + b;
//   const perkalian = a * b;
//   const pembagian = a / b;

//   // Mengembalikan semua hasil dalam satu array
//   return [penjumlahan, perkalian, pembagian];
// }

// const hasil = hitungData(10, 2); // hasil akan berisi [12, 20, 5]

// console.log(hasil[0]); // Mengambil hasil penjumlahan: 12
// console.log(hasil[1]); // Mengambil hasil perkalian: 20
// console.log(hasil[2]); // Mengambil hasil pembagian: 5

// // menggunakan destructuring assignment
// const [sum, product, division] = hitungData(10, 2);

// console.log(`Penjumlahan: ${sum}`);
// console.log(`Perkalian: ${product}`);
// console.log(`Pembagian: ${division}`);

// // Function Multiple Return Values dengan Object
// function hitungDataLengkap(a, b) {
//   const penjumlahan = a + b;
//   const perkalian = a * b;
//   const pembagian = a / b;

//   // Mengembalikan semua hasil dalam satu object
//   return {
//     jumlah: penjumlahan,
//     kali: perkalian,
//     bagi: pembagian,
//   };
// }

// const hasilLengkap = hitungDataLengkap(10, 2);

// console.log(hasilLengkap.jumlah); // Mengambil nilai dengan nama properti: 12
// console.log(hasilLengkap.kali); // Mengambil nilai dengan nama properti: 20
// console.log(hasilLengkap.bagi); // Mengambil nilai dengan nama properti: 5
