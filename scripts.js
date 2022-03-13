const show_books = document.querySelector("#showBooks")
const container = document.querySelector('.container')
const addBookBtn = document.querySelector('#addBookBtn')
const removeBtn = document.querySelectorAll('.removeBtn')
const bookForm = document.querySelector('form')

// hide form
bookForm.style.display = 'none'


let myLibrary = [
{
    title : "Harry Potter",
    author : "JK Rowling",
    pages : 200,
    available : true
},
{
    title : "The Hobbit",
    author : "Tokien",
    pages : 400,
    available : true
}]

// Event listeners
// addBookBtn.addEventListener('click', displayForm(bookForm))
addBookBtn.addEventListener('click', showOrHide)

// constructor
function Book (title, author, pages, available) {
    this.title = title
    this.author = author
    this.pages = pages
    this.available = available
}

// functions
function showOrHide () {
    if (bookForm.style.display == 'none') {
        displayForm ()
    } else {
        hideForm ()
    }
}

function displayForm () {
    bookForm.style.display = 'block'
}

function hideForm () {
    bookForm.style.display = 'none'
}

function removeItem (index) {
    myLibrary.splice(index, 1)
}

function addBookToLibrary (title, author, pages, available) {
    book = new Book(title, author, pages, available)
    myLibrary.push(book);
}

function viewLibrary () {
    myLibrary.forEach((book, index) => {
        console.log(book)
        displayAttributeValues(book, index)
    });
}

// this function will create separate divs for each attribute
// of the object and display the values of each attribute
function displayAttributeValues (book, index) {
    let new_element = document.createElement("div")
    new_element.className = "book"
    new_element.index = index

    for (i in book) {
        let new_inner_element = document.createElement("div")
        new_inner_element.className = "book-attribute"
        new_inner_element.innerText = i + " : "
        new_inner_element.innerText += book[i]
        new_element.appendChild(new_inner_element)
    }
    container.appendChild(new_element)
}

// testing
addBookToLibrary ("Monkey World", "King Monkey", 100, false)
viewLibrary()

