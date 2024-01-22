const myLibrary = [];

class Book {
    constructor(name, author, pages, read) {
        this._name = name;
        this._author = author;
        this._pages = pages;
        this._read = read;
        this._index = null;
    }

    get name() { return this._name };
    get author() { return this._author };
    get pages() { return this._pages};

    get read() { return this._read; };
    set read(value) {
        if (value === true || value == false) {
            this._read = value;
        }
        else {
            console.log('value of read not good');
        }
    }

    get index() { return this._index};
    set index(value) {
        this._index = value;
    }
}

function deleteElementByIndex(index) {
    var tempIndex;

    // get index of element in array
    myLibrary.forEach((b) => {
        if (b.index == index)
            tempIndex = myLibrary.indexOf(b);
    });

    myLibrary.splice(tempIndex, 1);
}

function createCard(b) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = myLibrary.indexOf(b);

    var title = document.createElement('span');
    var author = document.createElement('span');
    var pages = document.createElement('span');
    var read = document.createElement('button');
    read.classList.add('readBtn');
    read.addEventListener('click', () => {
        //if read is true, the change to false when pressed on 'read'
        if (b.read === true) {
            b.read = false;
            read.innerHTML = `Read: no`;
            read.style.backgroundColor = 'red';
        } else {
            b.read = true;
            read.innerHTML = `Read: yes`;
            read.style.backgroundColor = 'green';
        }
    })
    //this is for the initial value of button on the card
    //this is wrong because the value in the book object doesn't change
    //is duplicated and everything should be written in another way
    if (b.read) {
        read.innerHTML = `Read: yes`;
        read.style.backgroundColor = 'green';
    } else {
        console.log(b.read);
        read.innerHTML = `Read: no`;
        read.style.backgroundColor = 'red';
    }

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        var index = deleteBtn.parentNode.dataset.index
        var parentCard = deleteBtn.parentNode;
        deleteElementByIndex(index);
        document.querySelector('.container').removeChild(parentCard);
    });

    title.innerHTML = `Title: ${b.name}`;
    author.innerHTML = `Author: ${b.author}`;
    pages.innerHTML = `Pages: ${b.pages}`;
    deleteBtn.innerHTML = 'Delete';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn);
    return card;
}

function displayLibrary(b) {
    var card = createCard(b);
    document.querySelector('.container').appendChild(card);
}

function addBookToLibrary(b) {
    myLibrary.push(b);
    b.index = myLibrary.indexOf(b);
    displayLibrary(b);
}

const newBookBtn = document.querySelector('.newBookBtn');
const formContainerPopUp = document.querySelector('.formContainerPopUp');
const blocker = document.querySelector('.blocker');
formContainerPopUp.style.display = 'none';

newBookBtn.addEventListener('click', () => {
    formContainerPopUp.style.display = 'block';
})

blocker.addEventListener('click', () => {
    formContainerPopUp.style.display = 'none';
})

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

function isEmpty(str) {
    return (str === '') || (str == null)
}

function resetForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', (event) => {
    if (!isEmpty(title.value) && !isEmpty(author.value) && !isEmpty(pages.value)) {
        event.preventDefault();
        const book = new Book(title.value, author.value, pages.value, read.checked);
        addBookToLibrary(book);
        formContainerPopUp.style.display = 'none';
        resetForm();
    }
});