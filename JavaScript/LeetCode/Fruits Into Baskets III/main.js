let kendaraanMotor = 2000;
const tambahanMotor = 1000;
let kendaraanMobil = 10000;
const tambahanMobil = 4000;
let waktu = 5;

if (kendaraanMotor) {
  if (waktu > 2) {
    kendaraanMotor = kendaraanMotor + (waktu - 2) * tambahanMotor;
    console.log(`pembayaran Motor sebesar Rp. ${kendaraanMotor}`);
  } else {
    console.log("pembayaran Motor sebesar Rp.2000");
  }
}

if (kendaraanMobil) {
  if (waktu > 2) {
    kendaraanMobil = kendaraanMobil + (waktu - 2) * tambahanMobil;
    console.log(`pembayaran Motor sebesar Rp. ${kendaraanMobil}`);
  } else {
    console.log("pembayaran Motor sebesar Rp.2000");
  }
}
