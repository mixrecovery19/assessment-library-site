// Basic javascript page to handle the fetching of the .json file as well as some simple search functionality.
//create variables to store the book list, selected book and books
// books is an empty array
let books = []; 
let selectedBook = null; 

//loads the DOM Document Object Model correctly
document.addEventListener("DOMContentLoaded", () => {
  fetch("library-books.json")
    .then(response => response.json())
    .then(data => {
      books = data; 
    })
    .catch(error => console.error("Error fetching JSON:", error));
  
  document.getElementById("search-box").addEventListener("input", searchBooks);
});

function searchBooks() {
  // create a variable to store the value of the search box
  const query = document.getElementById("search-box").value.toLowerCase();
  // create a variable to store the book list
  const bookList = document.getElementById("book-list");
  // clear the book list
  bookList.innerHTML = ""; 
// create a variable to store the filtered books
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.genre.toLowerCase().includes(query)
  );
// if statement to check if there are no books that match the search query
  if (filteredBooks.length === 0) {
    // if there are books that match the search query then display the message "No books found"
    bookList.innerHTML = "<tr><td colspan='5'>No books found</td></tr>";
    return;
  }

  filteredBooks.forEach(book => {
    const row = document.createElement("tr");
    // create a row for the book list
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.genre}</td>
      <td><button class="select-button" data-id="${book.id}">Select</button></td>
    `;
    // append/insert the row to the book list
    bookList.appendChild(row);
  });
  // add event listener(action) to the select button
  document.querySelectorAll(".select-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const bookId = event.target.getAttribute("data-id");
      selectBook(bookId);
    });
  });
}
// function to select a book
function selectBook(bookId) {
  selectedBook = books.find(book => book.id === parseInt(bookId));
// if statement to check if the selected book is not found !(not) selectedbook alert error message
// if the selected book is found then display the book title, author, year and genre
  if (!selectedBook) {
    alert("Error: Book not found.");
    return;
  }
  
  document.getElementById("book-title").textContent = selectedBook.title;
  document.getElementById("book-author").textContent = selectedBook.author;
  document.getElementById("book-year").textContent = selectedBook.year;
  document.getElementById("book-genre").textContent = selectedBook.genre;

  document.getElementById("selected-book").style.display = "block";
}
