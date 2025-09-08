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
