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
document.getElementById('demo-remove').addEventListener('click', handleRemove); // remove demo-book-tr



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
document.getElementById('demo-change').addEventListener('click', handleChangeButton); // change demo-book reading state

// handle submit form and update libraray array && html tr
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
    console.log(library); //pass

    // add html element 
    let trToAdd = document.createElement('tr'); //create book-tr
    trToAdd.className = 'book-tr';
    document.getElementById('lib-body').appendChild(trToAdd);

    let tdTitle = document.createElement('td');  // title-td
    tdTitle.className = 'book-title';
    tdTitle.innerHTML = titleValue;
    trToAdd.appendChild(tdTitle);  // pass

    let tdAuthor = document.createElement('td');
    tdAuthor.className = 'book-author';
    tdAuthor.innerHTML = authorValue;
    trToAdd.appendChild(tdAuthor);

    let tdPages = document.createElement('td');  // pages-td
    tdPages.className = 'book-pages';
    tdPages.innerHTML = pagesValue;
    trToAdd.appendChild(tdPages);

    let tdRead = document.createElement('td');  // read-td
    trToAdd.appendChild(tdRead);
    let readStateText = document.createElement('p');
    readStateText.innerHTML = readStateValue;
    readStateText.className = 'read-state';
    tdRead.appendChild(readStateText); // append <p> to read-td
    let readStateChangeButton = document.createElement('button');
    readStateChangeButton.className = 'read-state-change-indicator';
    readStateChangeButton.type = 'button';
    readStateChangeButton.innerHTML = 'change';
    readStateChangeButton.addEventListener('click', handleChangeButton);
    tdRead.appendChild(readStateChangeButton); // append change button to read-td

    let tdRemove = document.createElement('td'); // remove-td
    trToAdd.appendChild(tdRemove);
    let removeBookButton = document.createElement('button');
    removeBookButton.type = 'button';
    removeBookButton.className = 'remove-book';
    removeBookButton.innerHTML = 'remove this book';
    removeBookButton.addEventListener('click', handleRemove);
    tdRemove.appendChild(removeBookButton); 
}
submitBtn.addEventListener('click', handleSubmit);

// make form disappear after click submit
function makeFormInvisable(ele) {
    ele.style.display = 'none';
}

submitBtn.addEventListener('click', function(){
    makeFormInvisable(newBookFormDiv);
});
