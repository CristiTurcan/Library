const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.name} by ${this.author} has ${this.pages}, read it: ${read}`
    }
}

function addBookToLibrary(b) {
    myLibrary.push(b);
}

const harryPotter = new Book('Harry Potter', 'JK Rowling', 321, 'yes');
const oneMore = new Book('One More', 'Someone', 43, "no");

addBookToLibrary(harryPotter);
addBookToLibrary(oneMore);

const container = document.querySelector('.container')

function displayBook(b) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.textContent = b.info();
    container.appendChild(card);
}

displayBook(harryPotter);
displayBook(oneMore);
