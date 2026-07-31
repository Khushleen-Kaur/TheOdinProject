console.log("Welcome to Khushleen's Library!");

var count = 0;
class Book{
    constructor(title, author, pages , coverUrl) {
        this.BookNumber = ++count;
        this.id = Date.now() + "-" + Math.random().toString(36).slice(2);
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.coverUrl = coverUrl;
    }
}
function addBookToLibrary(book) {
    let container = document.querySelector(".container");
    let html = `
        <div class="bookBox" id="${book.BookNumber}">
        <button class="removeBook">X</button>
            <img src="${book.coverUrl}" alt="Book Cover">
            <div class="info">
                <div class="data"><strong>Title</strong> : ${book.title}</div>
                <div class="data"><strong>Author</strong> : ${book.author}</div>
                <div class="data"><strong>Number of Pages</strong> : ${book.pages}</div>
                <div class="data"><strong>Book Id</strong> : ${book.id}</div>
            </div>
            <button class="unread">Unread</button>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', html);
    
    let unreadArray = document.querySelectorAll(".unread");
    unreadArray[unreadArray.length - 1].addEventListener("click" , (() => {
        if(unreadArray[unreadArray.length - 1].innerHTML == "Unread"){
            unreadArray[unreadArray.length - 1].innerHTML = "Read";
        }else{
            unreadArray[unreadArray.length - 1].innerHTML = "Unread";
        }
    }));
    let removeArray = document.querySelectorAll(".removeBook");
    removeArray[removeArray.length - 1].addEventListener("click" , (() => {
        removeArray[removeArray.length - 1].parentElement.outerHTML = "";
        myLibrary[removeArray[removeArray.length - 1].parentElement.getAttribute('id') - 1];
        alert("Book removed from Library Successfully!")
    }));
        

}

let form = document.querySelector("#myForm");
form.addEventListener("submit", (() => {
    event.preventDefault();
    
    let t = document.getElementById("title").value;
    let a = document.getElementById("author").value;
    let p = document.getElementById("pages").value;
    let u = document.getElementById("coverUrl").value;
    if(t == "" || a == "" || p == "" || u == ""){
        alert("Please, Enter all the details.");
    }else if(u.endsWith(".jpg") || u.endsWith(".jpeg") || u.endsWith(".png") ){
        let b = new Book(t,a,p,u);
        
        myLibrary.push(b);
        alert("Book Added");
        addBookToLibrary(myLibrary[myLibrary.length-1]);
    }else{
        alert("Please, Enter a valid URL for Cover Page.");
    }
    document.querySelector("#my-dialog").close();
}));


let obj1 = new Book("Ramayana", "Ancient sage Valmik", 1184 , "BookCover/ramayana.jpg");
let obj2 = new Book("Pride and Prejudice", "Jane Austen", 439 , "BookCover/pride.jpg");
let obj3 = new Book("Project hail Mary", "Andy Weir", 854, "BookCover/hail.jpg");
let obj4 = new Book("To Kill a Mockingbird", "Harper Lee", 567, "BookCover/moking.jpg");

const myLibrary = [obj1, obj2, obj3, obj4];
addBookToLibrary(myLibrary[0]);
addBookToLibrary(myLibrary[1]);
addBookToLibrary(myLibrary[2]);
addBookToLibrary(myLibrary[3]);
