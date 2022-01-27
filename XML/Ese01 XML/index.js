'use strict'

function crea() {
	// bookstore = bookstore.replace(/>\s*/g, '>');
    // bookstore = bookstore.replace(/\s*</g, '<');
    //alert(bookstore)
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente nel localStorage")
    
}

function visualizza() {
    // lettura della stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");
    let parser= new DOMParser();

    let xmlDom=parser.parseFromString(xml, "text/xml");
    let tabLibri= document.getElementById("tabLibri");

    //accedo alla radice xml

    let root= xmlDom.documentElement;

    console.log(root.children.length)

    //soluzione 1
    //for(let i=0; i<root.children.lenght; i++)
    //let book = root.children[i];

    //soluzione 2
    for(let book of root.children)
    {
        let categoria = "", titolo = "", linguaggio = "", autori = "", anno = "", prezzo = "";

        if(book.hasAttribute("category"))
        {
            categoria+=book.getAttribute("category");
        }

        for(let campo of book.children)
        {
            
            switch (campo.nodeName) 
            {
                case "title":

                    titolo+=campo.textContent+" ";

                    if(campo.hasAttribute("lang"))
                    {
                        linguaggio+=campo.getAttribute("lang");
                    }

                    break;

                case "author":
                    
                    autori+=campo.textContent+" ";

                    break;

                case "year":
                    
                    anno+=campo.textContent+" ";

                    break;

                case "price":

                    prezzo+=campo.textContent+" ";
                    
                    break;   
            }
        }
        //per ogni libro creiamo una riga della tabella e la riempiamo

       let tr= document.createElement("tr");

       tabLibri.appendChild(tr);

       let td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=titolo;
       
       td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=categoria;

       td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=linguaggio;

       td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=autori;

       td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=anno;

       td=document.createElement("td");
       tr.appendChild(td);
       td.innerHTML=prezzo;


    }

}