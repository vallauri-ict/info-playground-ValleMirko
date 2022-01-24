"use strict";

$(document).ready(function ()
{
    //puntatore jquery cioe' un vettore enumerativo di puntatori java
    //oggetti jquery --> NO metodi javascript
   let lampadina=$('.lampadina'); //accendo tramite classe
   let btnSpegni=$('#btnSpegni');
   let btnAccendi=$('#btnAccendi');
   let descrizione=$("#descrizione");
   let contenuto=$("#contenuto");


   lampadina.hide();//nasconde l'oggetto
   btnSpegni.hide();

   btnAccendi.on("click", function(){
            //lampadina[0].classList.add("accesa");
            //let lampadina1 = lampadina[0];
            //$(lampadina1).addClass("accesa");
        lampadina.addClass("accesa"); //aggiungo la classe accesa
        btnAccendi.hide();
        lampadina.fadeIn(2000, function(){
            btnSpegni.show();
        }); //visualizza l'oggetto e fa un animazione di 2sec
   })
    
   btnSpegni.on("click", function()
   {
       btnSpegni.hide();
       lampadina.fadeOut(2000, function(){
        btnAccendi.show()
        lampadina.removeClass("accesa");
    })
   })

   descrizione.addClass("pulsanteDescrizione");
   contenuto.hide();

   descrizione.on("mouseover", function visualizza(){
    descrizione.off("mouseover");
       contenuto.show(1000);
       descrizione.on("mouseover", visualizza);

   })
   descrizione.on("mouseout", function nascondi(){
    descrizione.off("mouseout");
    contenuto.hide(1000);
    descrizione.on("mouseover", nascondi);
})
let stileContenuto={
    "width" : "600px",
    "padding" : "5px",
    "border" : "1px solid black",
    "margin-left" : "140px",
    "margin-top" : "10px",
    "backgroundColor" : "#FF0"

};
contenuto.css(stileContenuto);//definisci css in js
})