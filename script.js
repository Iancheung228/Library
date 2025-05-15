const myLibrary = [];

// constructor
function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
  }

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array , myLibrary
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
}


function displayBooks() {
    myLibrary.forEach(book => {
      // makes a new <div> for this one book.
      const card = document.createElement("div");
      // adds a CSS class so you can style the card.
      card.classList.add("book-card");
  
      // fills in the HTML inside the card div
      card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.read ? "Read" : "Not read yet"}</p>
      `;


      const container = document.querySelector("#book-container");
      container.innerHTML = ""; // Clear previous display
      // This line inserts the card into the DOM, inside the #book-container element. After all books are looped, they all appear on the screen.
      container.appendChild(card);
    });
  }

  // This waits for the full HTML page to load before running any JS.
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stops the browser from submitting the form and reloading the page.
  
      // 1)Reads the values typed into the form inputs.
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const pages = document.getElementById("pages").value;
      const read = document.getElementById("read").value;
      
      // 2) Adds the respective value into html format inside the addBookToLibrary function
      addBookToLibrary(title, author, pages, read);
      displayBooks();
    });
  });

