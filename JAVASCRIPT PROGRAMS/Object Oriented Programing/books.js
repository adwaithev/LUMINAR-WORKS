class bookLibrary {
    getBookDetails() {
        let books = {
            "alchemist": { book_name: "alchemist", author: "paulo coelho", price: 200, no_of_copies: 100, sold: 2},//data[bname]
            "Wings of Fire": { book_name: "alchemist", author: "APJ Abdul Kalam", price: 200, no_of_copies: 100, sold: 15 },
            "Anna karenina": { book_name: "alchemist", author: "paulo cohelo", price: 200, no_of_copies: 100, sold: 10 },
            "The white tiger": { book_name: "alchemist", author: "Aravind Adiga", price: 200, no_of_copies: 100, sold: 11 },
            "God father": { book_name: "alchemist", author: "Mario Puzo", price: 200, no_of_copies: 100, sold: 6 },
            "The Da vinci code": { book_name: "alchemist", author: "dan brown", price: 200, no_of_copies: 100, sold: 3 },
        }
        return books;
    }

    findBook(bname) {
        let data = this.getBookDetails();
        if (bname in data) {
            if (bname == data[bname]["book_name"]);
            console.log("book found");
        }
        else {
            console.log("book not found")
        }
    }
    sortBooks(){
        let data=this.getBookDetails()
        console.log(Object.entries(data).sort((a,b)=>b[1].sold-a[1].sold))
    }
}
//findavailability/copies
//sort according to sold
var obj = new bookLibrary();
obj.findBook("alchemis")
obj.sortBooks()