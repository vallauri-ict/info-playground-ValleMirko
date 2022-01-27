"use strict"

let bookstore=[]; //Vettore enumerativo JSON

function converti() {
    bookstore=[];
    var xml = localStorage.getItem("bookstore_xml");
    if(!xml){
        alert(" Il file non è presente");
        return
    }
        //alert(xml);
    let parser= new DOMParser();
    let xmlDom= parser.parseFromString(xml, "text/html");
    var xml = localStorage.getItem("bookstore_xml");
    //accedo alla radice dell'albero XML
    let root=xmlDom.documentElement;
    for (const book of root.children) {
        let json={};
        if(book.hasAttribute("category"))
            json["category"]= book.getAttribute("category");
        for (const item of book.children) {
            if(item.tagName=="author"){
                if(!("authors" in json)){
                json["authors"]=[];
                }
                json["authors"].push(item.textContent);
            }
            else
                json[item.tagName]=item.textContent;
            if(item.tagName == "title" && item.hasAttribute("lang"))
                json["lang"]= book.getAttribute("lang");

        }
        bookstore.push(json);
        
    }
    console.log(JSON.stringify(bookstore, null, 3));
    localStorage.setItem("bookstore.json", JSON.stringify(bookstore));
    
}
