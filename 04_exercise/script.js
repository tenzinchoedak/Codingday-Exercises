function book(name, price, isSold) {
  this.name = name;
  this.price = price;
  this.isSold = isSold;
  this.show = function() {
    alert(this.name + this.price + this.isSold);
  }
}

let userBook = new book(bookName, bookPrice, bookIssold);
let bookName = document.getElementById("#bookname")
let bookPrice = document.getElementById("#bookprice")
let bookIssold = document.getElementById("#booksold")
