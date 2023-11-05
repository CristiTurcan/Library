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

function createCard(b) {
    var card = document.createElement('div');
    card.classList.add('card');

    var title = document.createElement('span');
    var author = document.createElement('span');
    var pages = document.createElement('span');
    var read = document.createElement('span');
    
    title.innerHTML = `Title: ${b.name}`;
    author.innerHTML = `Author: ${b.author}`;
    pages.innerHTML = `Pages: ${b.pages}`;
    read.innerHTML = `Read: ${b.read}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    return card;
}

function displayLibrary(b) {
    var card = createCard(b);
    document.querySelector('.container').appendChild(card);
}

function addBookToLibrary(b) {
    myLibrary.push(b);
    createCard(b);
}

const harryPotter = new Book('Harry Potter', 'JK Rowling', 321, 'yes');
const oneMore = new Book('One More', 'Someone', 43, "no");
const anotherOne = new Book('Another One', 'Another Someone', 432, 'yes');
const anotherOne1 = new Book('Another One1', 'Another Someone1', 332, 'no');

addBookToLibrary(harryPotter);
addBookToLibrary(oneMore);
addBookToLibrary(anotherOne);
addBookToLibrary(anotherOne1);

myLibrary.forEach((b) => displayLibrary(b));

const newBookBtn = document.querySelector('.newBookBtn');
const formContainerPopUp = document.querySelector('.formContainerPopUp');
const blocker = document.querySelector('.blocker');
formContainerPopUp.style.display = 'none';

newBookBtn.addEventListener('click', () => {
    formContainerPopUp.style.display='block';
})

blocker.addEventListener('click', () => {
    formContainerPopUp.style.display='none';
})

const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})