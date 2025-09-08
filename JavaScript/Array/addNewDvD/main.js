dvdCollection = [];

class DVD {
  constructor(name, releaseYear, director) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.director = director;
  }

  info() {
    console.log(
      `${this.name} directed by ${this.director} released in ${this.releaseYear}`
    );
  }
}

const avengerDVD = new DVD("The Avengers", "2012", "Joss Whedon");

dvdCollection.push(avengerDVD);

const incrediblesDVD = new DVD("The Incredibles", 2004, "Brad Bird");
const findingDoryDVD = new DVD("Finding Dory", 2016, "Andrew Stanton");
const lionKingDVD = new DVD("The Lion King", 2019, "Jon Favreau");

dvdCollection.push(incrediblesDVD, findingDoryDVD, lionKingDVD);

console.log(dvdCollection);
