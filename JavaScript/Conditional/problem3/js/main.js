let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
  machineResult = " switched on Machine raedy to run and try to loggin ";
  pwdResult =
    pwd === "cheese"
      ? "logged in successfully"
      : "their login attempt was not successful";
} else {
  machineResult = " switched off Machine Not running at all";
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
console.log(pwd);
