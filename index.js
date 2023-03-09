// library
let library = [];

// book constructor
function BookConstructor(title, name, pages, readState) {
    this.title = title;
    this.author = name;
    this.pages = pages;
    this.readState = readState;
}

// handle add new book btn
const addNewBookButton = document.querySelector('.add-new-book');
let newBookFormDiv = document.getElementById('new-book-form-div');
addNewBookButton.addEventListener('click', () => {
    newBookFormDiv.style.display = 'block';
});  // show add new book div when click

// handle user input, and add to table and lib array

