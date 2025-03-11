// Basic javascript page to handle the fetching of the .json file as well as some simple search functionality.
let books = []; 
let selectedBook = null; 

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
  const query = document.getElementById("search-box").value.toLowerCase();
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; 

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.genre.toLowerCase().includes(query)
  );

  if (filteredBooks.length === 0) {
    bookList.innerHTML = "<tr><td colspan='5'>No books found</td></tr>";
    return;
  }

  filteredBooks.forEach(book => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.genre}</td>
      <td><button class="select-button" data-id="${book.id}">Select</button></td>
    `;
    
    bookList.appendChild(row);
  });
  
  document.querySelectorAll(".select-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const bookId = event.target.getAttribute("data-id");
      selectBook(bookId);
    });
  });
}

function selectBook(bookId) {
  selectedBook = books.find(book => book.id === parseInt(bookId));

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
