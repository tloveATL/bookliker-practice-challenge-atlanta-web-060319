document.addEventListener("DOMContentLoaded", init)

const bookList = document.querySelector("#list")
const bookPane = document.querySelector("#show-panel")
const listPanel = document.querySelector("#list-panel")
const likeBtn = document.querySelector("button")

function init(){
    getBooks()
}

document.addEventListener("click", handleClick)
likeBtn.addEventListener("submit", handleLike)

function getBooks(){
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(data => showAllBooks(data))
}

function showAllBooks(books){
    books.forEach(function(book){
        let li = document.createElement("li")
        li.innerText = book.title
        bookList.appendChild(li)
})
}

function handleClick(e){
    getBookData()

// if (e.target.innerText == book.title)
displayBook()
}

function handleLike(e){
    
}

function getBookData(){
fetch("http://localhost:3000/books")
.then(resp => resp.json())
.then(data => displayBook(data))
}

function displayBook(books){
    books.forEach(function(book) {
    let bookCard =
    `<h1> ${book.title}</h1>
    <img src=${book.img_url} alt="book cover"
    <br>
    <p> ${book.description} </p>
    <ul id="likers">
        <li> ${book.users[0].username}
        <li> ${book.users[1].username}
    </ul>
    <button type="button">Like This Book!</button>`
bookPane.innerHTML = bookCard
    })
}