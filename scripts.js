const show_books = document.querySelector("#showBooks")
const container = document.querySelector('.container')

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
        console.log(book)
        displayAttributeValues(book)
    });
}


// this function will create separate divs for each attribute
// of the object and display the values of each attribute
function displayAttributeValues (book) {
    let book_len = Object.keys(book).length;
    let new_element = document.createElement("div")
    new_element.className = "book"
    for (i in book) {
        let new_inner_element = document.createElement("div")
        new_inner_element.className = "book-attribute"
        new_inner_element.innerText = i + " : "
        new_inner_element.innerText += book[i]
        new_element.appendChild(new_inner_element)
    }
    container.appendChild(new_element)

}
addBookToLibrary ("Monkey World", "King Monkey", 100, false)

viewLibrary()
