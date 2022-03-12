const header = document.querySelector('.header')

// all the books and info about books are stored here
let myLibrary = [{title : "The Hobbit", author : "JRR Tolkien", pages : 400, availability : true},
{title : "Banana Hope", author : "Monkey Ass", pages : 100, availability : false}]

// consutructor for Book objects
function Book (title, author, pages, availability) {
    this.title = title
    this.author = author
    this.pages = pages
    this.availability = availability
}

// this function will print some information about the particullar
// book
Book.prototype.info = function () {
    let info = this.title + " is written by " + this.author +
    " and there are " + this.pages + " pages in this fucking book."
    return info
}

// this function will create a Book object and then add
// it to the myLibrary array
function addToLibrary(title, author, pages, availability) {
    book = new Book(title, author, pages, availability);
    myLibrary.push(book)
}

// this function iterates through a give list and display each 
// element in the list
function displayBook (library) {
    library.forEach(book => {
        console.log(book)
    });
}

// testing starts here
let book1 = new Book("The Hobbit", "Cunt", 200, true)
let text = book1.info()
displayBook(myLibrary)
console.log("*---------*------------*---------*")
addToLibrary("One Piece", "Oda", 10000, true)
displayBook(myLibrary)