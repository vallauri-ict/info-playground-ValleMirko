"use strict"

function salva(){
    let book={};
    book.category = document.getElementById("txtCategoria").value;
    book.title = document.getElementById("txtTitolo").value;
    book.lang = document.getElementById("txtLingua").value;
    /*book.authors = [];
    authors.push(document.getElementById("txtAutore").Value);*/
    book.authors = document.getElementById("txtAutore").value.split(", ");
    book.price = document.getElementById("txtPrezzo").value;
    book.year = document.getElementById("txtAnno").value;

    localStorage.getItem("bookstore.json");
    let jsonString=localStorage.getItem("bookstore.json");
    let bookstore = JSON.parse(jsonString);

    bookstore.push(book);

    localStorage.setItem("bookstore.json", JSON.stringify(bookstore));
    window.Location.href= "index.html"; //torna al inzio
}

function annulla(){
    window.location.href="index.html";
}