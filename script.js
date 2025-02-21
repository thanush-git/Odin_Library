const addBtn = document.getElementById("add-new-btn")
const container = document.querySelector(".container")

const myLibrary = [];

function Book(title, genre, author, read) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
};

const dialogForm = `
 <dialog open id="dialog-box">
        <h1>Enter new book details</h1>
        <form method="dialog">

            <div class="form-div">
                <div class="labels">
                    <label for="book-name">Book name: </label>
                    <label for="genre">Genre: </label>
                    <label for="author">Author: </label>
                    <label for="">Read:</label>
                </div>
                <div class="inputs">
                    <input type="text" name="book-name" id="book-name" required>
                    <input type="text" name="genre" id="genre" required>
                    <input type="text" name="author" id="author" required>
                    <!-- From Uiverse.io by TimTrayler -->
                    <label class="switch">
                        <input type="checkbox" id="read-status">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <button type="submit" id="submit-button">Add</button>
            <button id="close-dialog">Cancel</button>
        </form>
    </dialog>
`;

addBtn.addEventListener("click", () => {
    if (!document.getElementById("dialog-box")) {
        document.body.insertAdjacentHTML("beforeend", dialogForm);

        document.getElementById("close-dialog").addEventListener("click", () => {
            document.getElementById("dialog-box").remove();
        });

        document.getElementById("submit-button").addEventListener("click", (e) => {

            e.preventDefault();

            const title = document.getElementById("book-name").value;
            const genre = document.getElementById("genre").value;
            const author = document.getElementById("author").value;
            const readStatus = document.getElementById("read-status").checked;
            document.getElementById("dialog-box").remove();

            myLibrary.push(new Book(title, genre, author, readStatus));
            displayBook();
        })
    }
});

function displayBook() {
    container.innerHTML = "";
    myLibrary.forEach(element => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
        <h3>${element.title}</h3>
        <p><strong>Genre:</strong> ${element.genre}</p>
        <p><strong>Author:</strong> ${element.author}</p>
        <p>Read: <button id="card-button"><strong></strong> ${element.read ? "Yes" : "No"}</button></p>
    `;

        container.appendChild(bookDiv);
    })
}
