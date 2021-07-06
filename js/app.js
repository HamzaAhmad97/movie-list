'use strict';

let movieGenre = ['action', 'adventure', 'animation','comedy','detective', 'fantasy' ,'history' ,'horror' ,'musical','pirate','romantic', 'sci-fi','war','western'];

let tableBody = document.querySelector('table tbody');
let imageSelect = document.getElementById('image');
let form = document.getElementById('form');
form.addEventListener('submit', getDataFromForm);

let movieList;
try {
   movieList = JSON.parse(localStorage.movieList) || [];
} catch {
  movieList = [];
}
if (movieList.length !=0) {
  for (let i = 0; i < movieList.length; i++) {
    render(movieList[i].name,movieList[i].genre,movieList[i].year );
  }
}
// try {
//   movieList = JSON.parse(localStorage.movieList);
//   console.log(movieList);

//   for (let i = 0; i < movieList.length; i++) {
//     render(movieList[i].name,movieList[i].genre,movieList[i].year );
//   }
//   console.log(movieList[i].name,movieList[i].genre,movieList[i].year );
// } catch {
//   movieList = [];
// }
function Movies(genre) {
  this.genre = genre;
  this.path = `../img/${genre}.png`;
  Movies.all.push(this);
}
Movies.all = [];

function MovieItem(name,year, genre) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  movieList.push({name, year, genre});
  console.log(movieList);
}


// function List(arr) {
//   this.items = arr;
// }
// List.prototype.addMovie = (name, genre, year) => {
  
//   this.items.push(addedMovie);
// }

for (let i = 0; i < movieGenre.length; i++) { 
  new Movies(movieGenre[i]);
}

populateForm();

function populateForm() {
  for (let i = 0; i < movieGenre.length; i++) {
    let option = document.createElement('option');
    option.textContent = movieGenre[i];
    imageSelect.appendChild(option);
  }
}
function getDataFromForm(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let genre = imageSelect.value;
  let year = document.getElementById('release').value;
  new MovieItem(name, year, genre);
  saveToLocalStorage() ;

  render(name, genre, year);
}


function render(name, genre, year) {
 let row = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = 'X';
  let td2 = document.createElement('td');
  td2.innerHTML = `<img src="../img/${genre}.png" alt="">`;
  let td3 = document.createElement('td');
  td3.textContent = name;
  let td4 = document.createElement('td');
  td4.textContent = year;
  tableBody.appendChild(row);
  row.append(td1, td2, td3, td4);
  saveToLocalStorage()
}
function saveToLocalStorage() {
  localStorage.setItem('movieList', JSON.stringify(movieList));
}
// function renderExists({name, year, genre}) {
//  render(name, genre, year);
// }