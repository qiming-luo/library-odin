// library
let library = [];

// book constructor
function BookConstructor(title, name, pages, readState) {
    this.title = title;
    this.author = name;
    this.pages = pages;
    this.readState = readState;
}

/*work flow
    1. set up html form
    2. write submit button event handler: get user input to create book tr and handle remove event && toggle
    read state event
*/
// remove book tr from table
let booksTable = document.getElementById('books-table'); // table element

// get user input and create book tr, and add event listener
let bookTr = document.createElement('tr'); // create book tr
// create book tds and append them to book tr


function handlerRemoveBook() {
    let bookToRemove = document.getElementById('book-tr-id');
    booksTable.removeChild(bookToRemove);
}
