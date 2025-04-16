// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information

class Movie {
  #title
  #cast
  #description
  #rating
  contructor(title, cast, description, rating){
    this.#title = title;
    this.#cast = cast;
    this.#description = description
    this.#rating = rating
  }
  updateRating(newRating){
    this.#rating = newRating
    this.displayInfo()
  }
  displayInfo(){
    console.log(this.#description)
    document.getElementById("movie-info").innerHTML = `Title of Movie: ${this.#title}<br> Cast Members: ${this.#cast}<br> Description of the movie: ${this.#description}<br> rating: ${this.#rating}`
  }
}
//   #title
  // #cast
  // #description
  // #rating

// Test your implementation

// Display the initial information of the movie

let displaymovie = new Movie("Venom",["Tom Hardy","Riz Ahmed","Scott Haze"],"Black symbiote combines with Journalist to create havoc and chaos when it lands on Earth",10)

displaymovie.displayInfo()

displaymovie.updateRating(11)

// Update the rating of the movie

// Display the updated information of the movie

//"Venom",["Tom Hardy","Riz Ahmed","Scott Haze"],"Black symbiote combines with Journalist to create havoc and chaos when it lands on Earth",10