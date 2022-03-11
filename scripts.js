const show_books = document.querySelector("#showBooks")

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

function Book (title, author, pages, available) {
    this.title = title
    this.author = author
    this.pages = pages
    this.available = available
}

function addBookToLibrary (title, author, pages, available) {
    book = new Book(title, author, pages, available)
    myLibrary.push(book);
}

function viewLibrary () {
    myLibrary.forEach(book => {
        console.log(book);

        show_books.innerText = book.title
    });
}

addBookToLibrary ("Hutta", "Pakaya", 100, false)

viewLibrary()
