const accountUser = [
  (userAdmin = {
    userName: "admin",
    password: "admin",
  }),
  (userOther = {
    userName: "user",
    password: "user",
  }),
];
let Pemberitahuan;

const login = (accountUser, userName, password) => {
  if (accountUser === userAdmin) {
    if (userName === "admin" && password === "admin") {
      console.log("Login Berhasil");
    } else if (userName !== "admin" && password === "admin") {
      console.log("Username Salah");
    } else if (userName === "admin" && password !== "admin") {
      console.log("Password Salah");
    } else if (userName !== "admin" && password !== "admin") {
      console.log("Username dan Password Salah");
    }
  } else if (accountUser === userOther) {
    if (userName === "user" && password === "user") {
      console.log("Login Berhasil");
    } else if (userName !== "user" && password === "user") {
      console.log("Username Salah");
    } else if (userName === "user" && password !== "user") {
      console.log("Password Salah");
    } else if (userName !== "user" && password !== "user") {
      console.log("Username dan Password Salah");
    }
  } else {
    console.log("Akun Tidak Terdaftar silahkan buat akun terlebih dahulu");
  }
};

login(userAdmin, "admin", "admin");
