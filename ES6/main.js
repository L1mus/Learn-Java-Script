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

// Template Literals

// Penulisan String Biasa

// let nama = "Alice";
// let usia = 30;

// let pesan = "Halo, nama saya " + nama + " dan saya berusia " + usia + " tahun.";
// console.log(pesan);
// Output: "Halo, nama saya Alice dan saya berusia 30 tahun."

// Penulisan dengan Template Literals

// let nama = "Bob";
// let usia = 25;

// let pesan = `Halo, nama saya ${nama} dan saya berusia ${usia} tahun.`;
// console.log(pesan);
// // Output: "Halo, nama saya Bob dan saya berusia 25 tahun."

// let biodata = `Nama: John Doe
// Pekerjaan: Developer
// Alamat: Jakarta`;

// console.log(biodata);

// let harga = 10000;
// let diskon = 0.1;
// let total = `Total harga setelah diskon: Rp${harga - harga * diskon}`;
// console.log(total);
// // Output: "Total harga setelah diskon: Rp9000"

// const namaProduk = "laptop";
// const jumlah = 2;
// const hargaSatuan = 15000000;

// let strpesan = `Anda membeli ${namaProduk} sebanyak ${jumlah} dengan total harga Rp${
//   jumlah * hargaSatuan
// }.`;

// console.log(strpesan);

// DESTRUCTURING Assignment

// destructuring assignment tidak dirancang untuk memproses semua elemen.Destructuring lebih efisien ketika Anda hanya perlu mengambil satu atau beberapa elemen spesifik dari array atau object, dan Anda ingin menyimpannya ke dalam variabel dengan nama yang jelas.Ini akan membuat kode Anda lebih mudah dibaca dan ringkas.

// Gunakan perulangan jika Anda ingin mengiterasi (melakukan sesuatu pada) setiap elemen dalam array.
// Gunakan destructuring jika Anda hanya perlu mengambil beberapa nilai spesifik dan menugaskannya ke variabel.

// Destructuring Array

// Tanpa destructuring
// const warna = ["merah", "hijau", "biru"];

// const warna1 = warna[0];
// const warna2 = warna[1];
// const warna3 = warna[2];

// console.log(warna1, warna2, warna3); // Output: merah hijau biru

// Dengan destructuring
// const warna = ["merah", "hijau", "biru"];

// const [warna1, warna2, warna3] = warna;

// console.log(warna1, warna2, warna3); // Output: merah hijau biru

// Destructuring Object
// // Tanpa destructuring
// const user = {
//   nama: "John Doe",
//   umur: 30,
//   pekerjaan: "Developer"
// };

// const namaUser = user.nama;
// const umurUser = user.umur;

// console.log(namaUser, umurUser); // Output: John Doe 30

// // Dengan destructuring
// const user = {
//   nama: "John Doe",
//   umur: 30,
//   pekerjaan: "Developer"
// };

// const { nama, umur } = user;

// console.log(nama, umur); // Output: John Doe 30

// let produk = ["pensil", "buku", "penghapus"];

// let [item1, , item3] = produk;

// console.log(item1, item3);

// let siswa = {
//   nama: "Ali",
//   kelas: 1,
//   jurusan: "ComputerScience",
// };

// let { nama, , jurusan } = siswa;

// console.log(nama, jurusan);

//CLASSES
// Classes adalah konsep fundamental dalam Object-Oriented Programming (OOP) yang memungkinkan Anda membuat "cetak biru" (blueprint) untuk objek. Dengan classes, Anda bisa mengorganisir kode dengan lebih baik dan membuat objek dengan properti dan metode yang sama secara efisien.

// Sintaks Dasar

class NamaClass {
  constructor(parameter1, parameter2) {
    // Properti class
    this.properti1 = parameter1;
    this.properti2 = parameter2;
  }

  // Metode (perilaku) class
  namaMetode() {
    // Kode untuk menjalankan tugas tertentu
  }
}

// Membuat Objek dari Class
// class Hewan {
//   constructor(nama, jenis) {
//     this.nama = nama;
//     this.jenis = jenis;
//   }

//   bersuara() {
//     console.log(`${this.nama} bersuara...`);
//   }
// }

// // Membuat objek baru dari class Hewan
// const kucing = new Hewan("Si Tompel", "Kucing");
// const anjing = new Hewan("Si Doggy", "Anjing");

// console.log(kucing.nama); // Output: Si Tompel
// kucing.bersuara(); // Output: Si Tompel bersuara...

// console.log(anjing.jenis); // Output: Anjing
// anjing.bersuara(); // Output: Si Doggy bersuara...

class mobil {
  constructor(merek, tahun) {
    (this.merek = merek), (this.tahun = tahun);
  }
  info() {
    console.log(`Mobil ${this.merek} tahun ${this.tahun}.`);
  }
}

const mobil1 = new mobil("Toyota", "2020");

mobil1.info();
