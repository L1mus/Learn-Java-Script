let season = "summer";
let response;

// Add your code here
if (season === "summer") {
  response =
    "Summer The time of year with bright sunshine and often used for vacations.";
} else if (season === "auntum") {
  reponse = "Auntum  The time when the leaves change color to red and orange.";
} else if (season === "winter") {
  reponse = "Winter The time when snow can fall heavily.";
} else if (season === "spring") {
  reponse = "Spring The time when flowers bloom and trees turn green again.";
} else {
  reponse = "we don't know what season it is";
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
