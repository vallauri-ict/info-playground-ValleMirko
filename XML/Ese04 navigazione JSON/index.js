"use strict";

let currentBook; //indice del record corrente

// uso gli STESSI NOMI delle chiavi JSON (ultima colonna = delete)
let intestazioni = ["title", "authors", "category", "price", ""];
let nomiPulsanti=["Primo", "Indietro", "Avanti", "Ultimo", "Aggiungi", "Elimina per categoria"];


window.onload = function() { 
	let json = this.localStorage.getItem("bookstore.json");
	this.console.log(json);
	let bookstore = this.JSON.parse(json);

	let body= document.getElementsByTagName("body")[0];
	let table= document.createElement("table");
	body.appendChild(table);
	let thead= document.createElement("thead");
	table.appendChild(thead);
	let tbody=document.createElement("tbody");
	table.appendChild(tbody);
	let dettagli= this.document.createElement("div");
	body.appendChild(dettagli);
	dettagli.classList.add("dettagli");
	let contenitorePulsanti=document.createElement("div");
	contenitorePulsanti.classList.add("contenitorePulsantiNavigazione");
	body.appendChild(contenitorePulsanti);

	currentBook=0;

	creaIntestazioni();
	caricaTabella();
	caricaDettagli();
	creaPulsanti();


	

	
	
	function creaIntestazioni(){
		//creazione intestazioni
		
		let tr=document.createElement("tr");
		thead.appendChild(tr);
		for (const item of intestazioni) {
			let th=document.createElement("th");
			th.innerHTML=item;
			tr.appendChild(th);
		}
	}

	function caricaTabella(){
		//caricamento dati
		let pos =0;
		for (let book of bookstore) {
			let tr=document.createElement("tr");
			tbody.appendChild(tr);
			for (let campo of intestazioni) {
				let td=document.createElement("td");
				if(campo!=""){
					if(campo=="authors")
						td.innerHTML=book[campo].join(",&nbsp;&nbsp;");
					else 
						td.innerHTML=book[campo];
				}
				else{
					let btn= document.createElement("button");
					btn.innerHTML="Delete";
					btn.addEventListener("click", cancella);
					btn.posizione= pos;
					pos++;
					td.appendChild(btn);
				}
				tr.appendChild(td);
			}
		}
	}
	
	function caricaDettagli(){
		dettagli.innerHTML;
		let book= bookstore[currentBook];
		for (const key in book) {
			let p=document.createElement("p");
			p.innerHTML=key;
			p.style.textAlign="right";
			dettagli.appendChild(p);
			let input= document.createElement("input");
			input.disabled=true;
			if(key!="authors"){
				input.value=book[key];
			}
			else
				input.value=book[key].join(",  ");
			dettagli.appendChild(input);
		}
	}

	function creaPulsanti(){
		for (const item of nomiPulsanti) {
			let btn=document.createElement("button");
			btn.classList.add("pulsantiNavigazione");
			btn.innerHTML=item;
			btn.id=item.toLowerCase();
			contenitorePulsanti.appendChild(btn);
			btn.addEventListener("click", gestisciPulsanti);
			if(btn.id == "indietro " || btn.id== "Avanti")
			btn.disabled = true;
			if(bookstore.length <= 1 && (btn.id == "Avanti" || btn.id == "Ultimo"))
				btn.disabled = true;
			
		}
		if(bookstore.length==0)
			document.getElementById("Elimina per categoria").disabled=true;
	}
	function gestisciPulsanti(){
		let primo = document.getElementById("Primo");
		let Ultimo = document.getElementById("Ultimo");
		let Avanti = document.getElementById("Avanti");
		let Indietro = document.getElementById("Indietro");


		switch(this.id){
			case "Primo":
				currentBook=0;
				primo.disabled=true;
				Indietro.disabled=true;
				Avanti.disabled=false;
				Ultimo.disabled=false;
				break;
			case "Indietro":
				  currentBook--;
				  if(currentBook == 0){
					primo.disabled=true;
					Indietro.disabled=true;
				  }
				  Avanti.disabled=false;
				  Ultimo.disabled=false;
					break;
			case "Avanti":
					currentBook++;
				  if(currentBook == bookstore.length-1){
					Avanti.disabled=true;
					Ultimo.disabled=true;
				  }
				  primo.disabled=true;
				  Indietro.disabled=true;
					break;
			case "Ultimo":
				currentBook = bookstore.length-1;
				primo.disabled=false;
				Indietro.disabled=false;
				Avanti.disabled=true;
				Ultimo.disabled=true;
					break;
			case "Aggiungi":
				window.location.href("pagina2.html"); // target_blank
				return;
			case "Elimina per Categoria":
				let categoria = prompt("Inserisci la Categoria da eliminare");
				eliminacategoria(categoria);

					break;
		}
		caricaDettagli();
	}

	function eliminacategoria(categoria)
	{

				for(let i=bookstore.length-1; i>=0; i--){			
				if(bookstore[i].category.toLowerCase() == categoria.toLowerCase()){
					bookstore.splice(i, 1);
				}
			}
			});
			localStorage.setItem("bookstore.json",JSON.stringify(bookstore));
			window.location.reload();

	}
	

	function cancella()
	{
		bookstore.splice(this.posizione, 1);
		localStorage.setItem("bookstore.json", JSON.stringify(bookstore));
		window.location.reload();//Refresh automatico


	}
};

