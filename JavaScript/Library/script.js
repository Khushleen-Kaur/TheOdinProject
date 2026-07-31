console.log("Welcome to Khushleen's Library!");

const myLibrary = [];

class Book{
    Book(title, author, pages , coverUrl) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.coverUrl = coverUrl;
        console.log(this.title);
    }
}
function addBookToLibrary(book) {
    
}

let form = document.querySelector("#myForm");
form.addEventListener("submit", (() => {
    event.preventDefault();
    
    let t = document.getElementById("title").value;
    let a = document.getElementById("author").value;
    let p = document.getElementById("pages").value;
    let u = document.getElementById("coverUrl").value;
    console.log(t,a,p,u);
    let book = new Book(t,a,p,u);

    myLibrary.push(book);
    console.log(myLibrary);
    alert("Book Added");
    document.querySelector("#my-dialog").close();
}));

