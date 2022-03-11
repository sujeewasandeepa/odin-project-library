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

function Book () {
    this.title = ''
    this.author = ''
    this.pages = 0
    this.available = false
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function viewLibrary () {
    
}