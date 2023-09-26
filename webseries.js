// Step 1: Create WebSeries class and adding properties
class WebSeries {
  constructor(title, director, stars, streamingPlatform) {
    this._title = title;
    this._director = director;
    this._stars = stars;
    this._streamingPlatform = streamingPlatform;
  }

  // Step 2: Define getters and setters
  //get:This method is used to access the properties of an object
  //set: this method is used to chnage the values of an object
  get title() {
    return this._title.toUpperCase();
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get director() {
    return this._director;
  }

  set director(newDirector) {
    this._director = newDirector;
  }

  get stars() {
    return this._stars;
  }

  set stars(newStars) {
    this._stars = newStars;
  }

  get streamingPlatform() {
    return this._streamingPlatform;
  }

  set streamingPlatform(newPlatform) {
    this._streamingPlatform = newPlatform;
  }
}

// Step 3: Hardcode an array of web series objects

const webSeriesArray = [
  {
    title: "Spy",
    director: "Garry BH",
    stars: "Nikhil,Kajal",
    streamingPlatform: "Prime",
  },
  {
    title: "Kushi",
    director: "Maheshbabu",
    stars: "Samantha,Vijay",
    streamingPlatform: "Prime",
  },
];
// Step 4:Loop over this array to display 6cardsof webseries
const webSeriesContainer = document.getElementById("webSeriesContainer");
webSeriesArray.forEach((webSeries, index) => {
  //forEach method is used to iterate over an array called webSeriesArray
  const card = document.createElement("div"); //this new <div> element is  created  and assigns it to the card variable. This will represent a card containing information about a web series.
  card.className = "card";
  card.innerHTML = `
        <h2>${webSeries.title.toUpperCase()}</h2>
        <p>Director: ${webSeries.director}</p>
        <p>Stars: ${webSeries.stars}</p>
        <p>Streaming Platform: ${webSeries.streamingPlatform}</p>
        <button class="delete-button" data-index="${index}">Delete</button>
      `;
  webSeriesContainer.appendChild(card);

  // Step 7: Delete button functionality
  const deleteButton = card.querySelector(".delete-button");

  deleteButton.addEventListener("click", () => {
    setTimeout(() => {
      //webSeriesArray.splice(index, 1); //At  index position it will  remove 1 element
      card.remove();
    }, 3000); // Delete after 30000ms
  });
});

// Function to add a new web series object to the array
<p>Streaming Platform: ${webSeries.streamingPlatform}</p>;
function addWebSeries(title, director, stars) {
  const newWebSeries = new WebSeries(
    title,
    director,
    stars,
    <p>Streaming Platform: ${webSeries.streamingPlatform}</p>
  );
  webSeriesArray.push(newWebSeries);
}

// Function to delete a web series after 1 minute
function deleteWebSeries(index) {
  setTimeout(() => {
    webSeriesArray.splice(index, 1);
  }, 60000); // 1 minute (60,000 milliseconds)
}
