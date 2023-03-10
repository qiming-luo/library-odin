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

// get user input
let submitBtn = document.getElementById('submit-form');
function handleSubmit(event) {
    event.preventDefault();
    let titleValue = document.getElementById('title-info').value;
    let authorValue = document.getElementById('author-info').value;
    let pagesValue = document.getElementById('pages-info').value;
    let readStateValue = document.getElementById('read-state').value;
    console.log(titleValue + authorValue + pagesValue + readStateValue);
}
submitBtn.addEventListener('click', handleSubmit);
