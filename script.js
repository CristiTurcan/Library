//TO DO

const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = null;
}

function deleteElementByIndex (index) {
    var tempIndex;

    // get index of element in array
    myLibrary.forEach((b) => {
        if(b.index == index)
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
    var read = document.createElement('span');
    
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
    read.innerHTML = `Read: ${b.read}`;
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
    formContainerPopUp.style.display='block';
})

blocker.addEventListener('click', () => {
    formContainerPopUp.style.display='none';
})

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

function isEmpty (str) {
    return (str === '') || (str == null)
}

function resetForm () { 
    title.value='';
    author.value='';
    pages.value='';
    read.checked = false;
}

const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', (event) => {
    if(!isEmpty(title.value) && !isEmpty(author.value) && !isEmpty(pages.value)){
        event.preventDefault();
        const book = new Book(title.value, author.value, pages.value, read.checked);
        addBookToLibrary(book); 
        formContainerPopUp.style.display='none';
        resetForm();
    }
});