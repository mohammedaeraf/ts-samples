class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary(): string {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

// Example usage:
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
console.log(book.getSummary());