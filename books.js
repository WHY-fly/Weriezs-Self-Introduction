const booksTitle = document.getElementById("books-title");
const booksDescription = document.getElementById("books-description");
const booksGrid = document.getElementById("books-grid");
const booksEmpty = document.getElementById("books-empty");

function getTopicKey() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (topic && BOOK_TOPICS[topic]) {
        return topic;
    }

    return "mathematics";
}

function createBookCard(book) {
    const card = document.createElement(book.pdf ? "a" : "article");
    card.className = `book-card glass-card ${book.pdf ? "book-card-downloadable" : "book-card-static"}`;

    if (book.pdf) {
        card.href = book.pdf;
        card.download = book.downloadName;
    }

    const image = document.createElement("img");
    image.className = "book-cover";
    image.src = book.cover;
    image.alt = `${book.title} 封面`;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "book-info";

    const title = document.createElement("h3");
    title.className = "book-name";
    title.textContent = book.title;

    const author = document.createElement("p");
    author.className = "book-author";
    author.textContent = book.author;

    const action = document.createElement("span");
    action.className = "book-action";
    action.textContent = book.pdf ? "点击下载 PDF" : "暂无 PDF";

    info.append(title, author, action);
    card.append(image, info);

    return card;
}

function renderBooksPage() {
    const topicKey = getTopicKey();
    const topic = BOOK_TOPICS[topicKey];
    const books = BOOK_LIBRARY[topicKey] || [];

    document.title = `Weriezs | ${topic.label}书单`;
    booksTitle.textContent = `${topic.label}书单`;
    booksDescription.textContent = topic.description;

    booksGrid.innerHTML = "";

    if (books.length === 0) {
        booksGrid.hidden = true;
        booksEmpty.hidden = false;
        return;
    }

    booksGrid.hidden = false;
    booksEmpty.hidden = true;
    books.forEach((book) => {
        booksGrid.appendChild(createBookCard(book));
    });
}

renderBooksPage();
