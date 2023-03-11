// library
let library = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pages: 300,
        readState: 'reading'
    }
];

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


// handle remove button
function handleRemove(event) {
    let trToRemove = event.target.parentElement.parentElement;  // return tr holding remove btn
    let bookTitle = trToRemove.querySelector('.book-title').innerHTML;
    //console.log(bookTitle); //for test
    let indexToRemove = library.findIndex(obj => obj.title === bookTitle); // find index in the library
    library.splice(indexToRemove, 1); // remove the book from library
    document.getElementById('lib-body').removeChild(trToRemove); // remove tr from tbody
    console.log(library); // test passed
}
/*
// test handleRemove 
let removeHarry = document.querySelector('.remove-book');
removeHarry.addEventListener('click', handleRemove); // passed
*/


// handle change button
function handleChangeButton(event) {
    let trHoldingChangeBtn = event.target.parentElement.parentElement;  // return tr holding changing btn
    let bookTitle = trHoldingChangeBtn.querySelector('.book-title').innerHTML;
    console.log(bookTitle);
    let indexToRemove = library.findIndex(obj => obj.title === bookTitle); // find index in the library
    let userInput = prompt('please enter new state');
    library[indexToRemove].readState = userInput; // update library 
    trHoldingChangeBtn.querySelector('.read-state').innerHTML = userInput; //update html content
    //console.log(library) // for test
}
/*
//test handleChangeButton passed
let eleChange = document.getElementById('change');
eleChange.addEventListener('click', handleChangeButton);
*/

// get user input
let submitBtn = document.getElementById('submit-form');
function handleSubmit(event) {
    event.preventDefault();
    let titleValue = document.getElementById('title-info').value;
    let authorValue = document.getElementById('author-info').value;
    let pagesValue = document.getElementById('pages-info').value;
    let readStateValue = document.getElementById('read-state-info').value;

    // build BookConstructor instance, push it to library
    let book = new BookConstructor(titleValue, authorValue, pagesValue, readStateValue);
    library.push(book);
    console.log(library);
/*
    // create new elements and add to tbody
    let tr = document.createElement('tr'); //first add tr

    let td1 = document.createElement('td'); // td1 to hold title
    td1.innerHTML = titleValue; 
    tr.appendChild(td1);

    let td2 = document.createElement('td'); // td2 to hold author
    td2.innerHTML = 'authorValue';
    tr.appendChild(td2);

    */
}
submitBtn.addEventListener('click', handleSubmit);
