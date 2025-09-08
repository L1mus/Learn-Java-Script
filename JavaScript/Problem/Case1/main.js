let waktu;
let kendaraan = [
  (mobil = {
    awalWaktu: 10000,
    berikutnya: 4000,
  }),
  (motor = {
    awalWaktu: 4000,
    berikutnya: 1000,
  }),
];
const parkiran = (kendaraan, waktu) => {
  if (kendaraan === mobil) {
    if (waktu > 0 && waktu <= 2) {
      console.log(`Pembayaran parkir sebesar Rp.${mobil.awalWaktu}`);
    } else if (waktu > 2) {
      console.log(
        `Pembayaran parkir sebesar Rp. ${
          mobil.awalWaktu + (waktu - 2) * mobil.berikutnya
        }`
      );
    } else {
      console.log(0);
    }
  } else if (kendaraan === motor) {
    if (waktu > 0 && waktu <= 2) {
      console.log(`Pembayaran parkir sebesar Rp.${motor.awalWaktu}`);
    } else if (waktu > 2) {
      console.log(
        `Pembayaran parkir sebesar Rp. ${
          motor.awalWaktu + (waktu - 2) * motor.berikutnya
        }`
      );
    } else {
      console.log(0);
    }
  } else {
    console.log("Ini bukan Kendaraan conventional");
  }
};

parkiran(motor, 5);
