// ARRAY;
// Tipe data yang digunakan untuk mendeskripsikan kumpulan element (nilai atau variable), yang tiap tiap elementnya memiliki indeks

// array = [value1, value2, value3, ..., valuen]
// first index is 0

// why array ?

// Mempermudah pengelolaan nilai / value / data pencarian dan penelusuran
// manajemen memory

// KARAKTERISTIK ARRAY;
// variable jamak yang mempunyai banyak element dan diacu dengan nama yang sama
// kupulan pasangan key dan nilai / key and value pair
// key adalah indek oada array dengan tipe data integer yang  dimulai dari 0
// array pada javasript bertipe Object
// array pada javasript memiliki fungsi / methode length untuk menghitung jumlah elemnet di dalamnya
// element pada array boleh memiliki tipe data berbeda

// array multidimension
// var myFunc = function () {
//   alert("Hello World");
// };

// var array = ["text", 2, false, myFunc, [4, 5, 6]];

// console.log(array[4][1]);

// MANIPULASI ARRAY
// MENAMBAH ISI ARRAY
// var arr = []
// arr[0] = 'Dude'
// arr[1] = 'Moh'
// arr[2] = 'Bre'
// arr[4] = 'Ali' // array output   [Dude,Moh,Bre,undefined,Ali]

// MENGAHPUS ISI ARRAY
// var arr = [Dude, Moh, Bre, Ali]
// arr[1] = undefined; // array output   [Dude,undefined,Bre,Ali]

// MENAPILKAN ARRAY
// var arr = [Dude, Moh, Bre, Ali]

// for (var i = 0; i < arr.length; i++){
//     console.log(`Orang ke - ${arr[i]}`)
// }

// ARRAY METHOD
// .length
// .join
// var arr = [Dude, Moh, Bre, Ali]
// console.log(arr.join()) //outputDude,Moh,Bre,Ali
// console.log(arr.join('-')) //output-Dude-Moh-Bre-Ali

// *.push & .pop // Menambah dan menghapus di indeks terakhir
// arr.push('Jo', 'Shena') // output [Dude, Moh, Bre, Ali,Jo,Shena]
// arr.pop //output [Dude, Moh, Bre, Ali,Jo]

// *.unshift & .shift // enambah dan menghapus di indeks awal
// arr.unshift('Jo', 'Shena') // output [Jo,Shena, Dude, Moh, Bre, Ali]
// arr.shift //output [Shena,Dude, Moh, Bre, Ali]

// *.slice //mengiris array / mengambil beberapa bagian dalam sebuah array untuk menjadi array yang baru
// .slice(indeksAwal, indexAkhir) //Notice indexAwal akanterbawa di array yang baru dan indexAkhir tidak akan terbawa
// var arr2 = arr.slice(1, 3)//Output  [Moh, Bre]
// var arr2=arr.slice(0,3)//Output  [Dude, Moh, Bre]

// *.splice //Menyambung atau menambal , menyisipkan di tengah-tengah sebuah element kedalam array
// .splice(indexAwal, mauDihapusBerapa, elementBaru1, ..., elementBaruN)
// arr.splice(2, 0, "Dope"); //Output [Dude, Moh,Dope, Bre, Ali]
// arr.splice(1, 2, "Dope", "Ken"); //Output [Dude, Dope, Ken, Ali]

// .ForEach() & .Map()
// .ForEach(Element, Indeks(Optional)) //Mengeksekusi fungsi yang disediakan satu kali untuk setiap elemen array.  Tidak Memiliki nilai kembali/Return
// Mirip seperti Looping
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var arr = [Dude, Moh, Bre, Ali];
// for (var i = 0; i < angka.length; i++) { console.log(angka[i])}
// angka.forEach(function (e) { console.log(e); }); // Output 1 2 3 4 5 6 7 8 sama seperti looping diatas
// var cetak = angka.forEach(e => console.log(e)) // Function Expression dengan Arrow Function // Output 1 2 3 4 5 6 7 8 sama seperti looping diatas
// angka.forEach(function (e, i) {
//   console.log(`Mahasiswa ke-${i + 1} adalah ${e}`); // Output Mahasiswa ke-1 adalah Dude, Mahasiswa ke-2 adalah Moh, dst..., Mahasiswa ke-4 adalah Ali
// });

// .Map(CallbackFn "Element,index,array", thisArg"Nilai yang akan digunakan 'this' saat menjalankan callbackFn") //Membuat array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array pemanggil. Mirip seperti .forEach() tetapi Memiliki nilai kembali/Return
// var angka2 = angka.map(function(e){ return e*2}) //Output angka2= [1, 4, 6, 8, 10, 12, 14, 16] dan angka=[1, 2, 3, 4, 5, 6, 7, 8]
// console.log(angka2.join('-'))

// .sort()mengurutkan elemen-elemen array di tempatnya dan mengembalikan referensi ke array yang sama, yang sekarang telah diurutkan. Urutan pengurutan default adalah menaik, dibangun berdasarkan konversi elemen menjadi string, lalu membandingkan urutan nilai unit kode UTF-16-nya. *Untuk mengurutkan elemen dalam suatu array tanpa mengubah array asli, gunakan toSorted().
// // .sort(compareFn"a(elementpertamauntuk perbandingan),b(elemen keduauntuk perbandingan") Memiliki nilai kembali/Return
// var angka = [1, 3, 4, 5, 2, 9, 6];
// var angka2 = [1, 3, 4, 5, 2, 9, 6, 10, 20];
// angka.sort(); // Output  1, 2, 3, 4, 5, 6, 9
// angka2.sort(); // Output  1, 10, 2, 20, 3, 4, 5, 6, 9 *Karna sort mengonversi ke nilai string sehingga mengurutkan karkater pertamanya saja
// angka.sort(function (a, b) {
//   return a - b;
// }); // Output  1, 2, 3, 4, 5, 6, 9, 10, 20 *Karna membandingkan antara element pertama)a) dan element ke dua(b)
// var cetak = angka.sort((a, b) => a - b); // Funtuion Expression dengan function arrow Output sama 1, 2, 3, 4, 5, 6, 9, 10, 20

// .filter() & .find()
// .filter(callbackFn, thisArg) //Menciptakan salinan dangkal dari bagian array yang diberikan, difilter hingga hanya elemen dari array yang diberikan yang lulus pengujian yang diterapkan oleh fungsi yang disediakan. Memiliki banyak nilai kembali/Return

// var words = ["spray", "elite", "exuberant", "destruction", "present"];
// var result = words.filter((word) => word.length > 6);
// console.log(result);// Output ["exuberant", "destruction", "present"] *Memiliki banyak nilai kembali/Return berupa array
// console.log(typeof result);

// .find(callbackFn, thisArg) // Mengembalikan elemen pertama dalam larik yang disediakan yang memenuhi fungsi pengujian yang disediakan. Jika tidak ada nilai yang memenuhi fungsi pengujian, undefinedelemen tersebut dikembalikan.Memiliki satu nilai kembali/Return
// const array = [5, 12, 8, 130, 44];
// const found = array.find((element) => element > 10);
// console.log(found); // Output 12
// var result = words.find((word) => word.length > 6);
// console.log(result); // Output exuberant *Memiliki satu nilai kembali/Return string
// console.log(typeof result);
