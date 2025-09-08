// const listItems = document.querySelectorAll("li");

// const toggleDone = (e) => {
//   if (!e.target.className) {
//     e.target.className = "done";
//   } else {
//     e.target.className = "";
//   }
// };

// listItems.forEach((item) => {
//   item.addEventListener("click", toggleDone);
// });

// var jmlAngkot = 10;
// var angkotBeroprasi = 6;
// var angkotLembur = 3;
// var noAngkot = 1;

// while (noAngkot <= 10) {
//   console.log(`Angkot No.${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

// while (noAngkot <= angkotBeroprasi) {
//   console.log(`Angkot No.${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

// for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log(`Angkot No.${noAngkot} sedang tidak beroprasi`);
// }

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`Angkot No.${noAngkot} beroprasi dengan baik`);
//   } else {
//     console.log(`Angkot No.${noAngkot} sedang tidak beroprasi`);
//   }
// }

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`Angkot No.${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot == 8 || noAngkot == 10) {
//     console.log(`Angkot No.${noAngkot} Sedang Lembur`);
//   } else {
//     console.log(`Angkot No.${noAngkot} sedang tidak beroprasi`);
//   }
// }

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
//     console.log(`Angkot No.${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
//     console.log(`Angkot No.${noAngkot} Sedang Lembur`);
//   } else {
//     console.log(`Angkot No.${noAngkot} sedang tidak beroprasi`);
//   }
// }

// makanan = prompt(
//   "Masukan Makan / minuman yang di inginkan? \n Pizza, Hamburger, Pasta, Kue, Softdrink, Juice, Tea"
// );
// switch (makanan) {
//   case "Pizza":
//   case "Hamburge":
//   case "Pasta":
//   case "Kue":
//     console.log(" ini Makanan  anda");
//     break;
//   case "Softdrink":
//   case "Juice":
//   case "Tea":
//     console.log("ini Minuman anda");
// }

var bintang = "";

// for (var i = 0; i < 5; i++) {
//   bintang += "*";
//   for (var j = i + 1; j < 5; j++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 5; i++) {
//   bintang += "*";
//   for (var j = i; j > 0; j--) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 10; i++) {
//   bintang += "";
//   for (var j = i + 1; j < 10; j++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (j > i) {
//       bintang += "*";
//     } else {
//       bintang += " ";
//     }
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 10; i++) {
//   bintang += "*";
//   if (i !== 5) {
//     for (var j = i; j > 0; j--) {
//       bintang += "*";
//     }
//   } else {
//     for (var j = i + 1; j < 10; j++) {
//       bintang += "*";
//     }
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 20; i++) {
//   if (i < 10) {
//     for (var j = i; j > 0; j--) {
//       bintang += "*";
//     }
//   } else {
//     for (var j = i; j < 20; j++) {
//       bintang += "*";
//     }
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10 - i; j++) {
//     bintang += " ";
//   }
//   for (var k = 0; k < 2 * i - 1; k++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < 10 - i; j++) {
//     bintang += "!";
//   }
//   for (var k = 0; k < 2 * i - 1; k++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 0; i < 5; i++) {
//   for (var j = 5; j > 5 - i; j--) {
//     bintang += "!";
//   }
//   for (var k = 5; k > 2 * i - 1; k--) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }

// for (var i = 1; i < 10; i++) {
//   if (i <= 5) {
//     for (var j = 1; j <= 10 - i; j++) {
//       bintang += " ";
//     }
//     for (var k = 1; k <= 2 * i - 1; k++) {
//       bintang += "*";
//     }
//   } else {
//     for (var j = 10; j > 10 - i; j--) {
//       bintang += " ";
//     }
//     for (var k = 10 * 2; k > 2 * i + 1; k--) {
//       bintang += "*";
//     }
//   }
//   bintang += "\n";
// }

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     for (var j = 1; j <= 10; j++) {
//       if (j % 2 == 0) {
//         bintang += "#";
//       } else {
//         bintang += " ";
//       }
//     }
//   } else {
//     for (var j = 1; j <= 10; j++) {
//       if (j % 2 == 0) {
//         bintang += " ";
//       } else {
//         bintang += "#";
//       }
//     }
//   }

//   bintang += "\n";
// }

// console.log(bintang);

// var angka = 1;
// var p = "";

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5 - i; j++) {
//     p += " ";
//   }
//   let angka = 1;
//   for (var k = 0; k <= i; k++) {
//     p += angka + " ";

//     angka = angka * ((i - k) / (k + 1));
//   }
//   p += "\n";
// }
// console.log(p);

// var longestCommonPrefix = function (strs) {
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === "") {
//         return "";
//       }
//     }
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// var tanya = true;
// while (tanya) {
//   var p = prompt("Kamu memilih apa ? semut, orang, atau  gajah");

//   var comp = Math.random();
//   console.log(comp);

//   if (comp < 0.34) {
//     comp = "semut";
//   } else if (comp >= 0.34 || comp <= 0.64) {
//     comp = "orang";
//   } else {
//     comp = "gajah";
//   }

//   var hasil = "";
//   if (p == comp) {
//     hasil = "SERI";
//   } else if (p == "semut") {
//     hasil = comp == "gajah" ? "MENANG" : "KALAH";
//   } else if (p == "orang") {
//     hasil = comp == "semut" ? "MENANG" : "KALAH";
//   } else if (p == "gajah") {
//     hasil = comp == "orang" ? "MENANG" : "KALAH";
//   } else {
//     hasil = "Input yang diberikan tidak sesuai";
//   }

//   alert(
//     `Kamu memilih ${p} dan Komputer meilih ${comp} dan hasilnya Adalah ${hasil}`
//   );

//   tanya = confirm("Lagi?");
// }
// alert("Terimakasih sudah bermain");

// var tanya = true;
// while (tanya) {
//   var kesempatan = 3;
//   alert(`Tebak angka 1-10\n Kamu hanya memiliki ${kesempatan} kesempatan`);

//   // input Random Number
//   var max = Math.floor(10);
//   var min = Math.ceil(1);
//   var comp = Math.floor(Math.random() * (max - min) + min);

//   while (kesempatan !== 0) {
//     var p = prompt("Masukan angka");

//     // rules
//     var hasil = "";
//     if (p == comp) {
//       hasil = `YEY nilai yang kamu tebak BENAR! dan jawabanya adalah ${comp}`;
//       break;
//     } else if (p < comp) {
//       kesempatan -= 1;
//       hasil = `Nilai yang kamu input kekecilan \n Ayo masih ada kesempatan ${kesempatan}`;
//     } else if (p > comp) {
//       kesempatan -= 1;
//       hasil = `Nilai yang kamu input keebesaran \n Ayo masih ada kesempatan ${kesempatan}`;
//     } else {
//       hasil = "Nilai yang kamu input tidak sesuai";
//     }
//     alert(`${hasil}`);
//   }
//   if (kesempatan === 0 && p != comp) {
//     alert("Kamu GAGAL!!!");
//   }
//   tanya = confirm("Lagi?");
// }

// alert("Terimakasih sudah bermain");
