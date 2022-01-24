'use strict'

let ul = []
let wrapper;
function aggiungi(index)
{

}

function sposta(index)
{
   let  len = ul[index-1].children("li").length;
   if(len>0){
      let li= ul[index-1].children("li").last();
      let dest= (index==1) ? 2 : 1;
      li.appendTo(ul[dest-1]);
   }
   else
   alert("Non ci sono Elementi da spostare");
}

function aggiungiPrima(index){
   let  len = ul[index-1].children("li").length;
   if(len > 0){
      let li = ul[index-1].children().first();
      //la inserisce prima del primo li
      $("<li>").text("-----------").insertBefore(li);
   }
   else{
      $("<li>").text("-----------").appendTo(ul[index-1]);
   }
}
function aggiungiDopo(index){
   let  len = ul[index-1].children("li").length;
   if(len > 0){
      let li = ul[index-1].children().first();
      //la inserisce dopo il primo li
      $("<li>").text("-----------").insertAfter(li);
   }
   else{
      $("<li>").text("-----------").appendTo(ul[index-1]);
   }
}
function replica(index){
   $("<li>").text("-----------").insertAfter(ul[index-1].children());
   if(ul[index-1].children().length == 0)
   $("<li>").text("-----------").appendTo(ul[index-1]);
   else
   $("<li>").text("-----------").insertAfter(ul[index-1].children());
}

function creazioneConCostruttore()
{
   $("<div>", {
      "css" : {
         "background-color": "#ddd",
         "width":"200px"
      },
      "text" : "Compila il seguente campo:",
      "appendTo" : wrapper,
      "append" : [
         $("<br>"),
         $("<label>", {"text": "hobbies :" } ),
         $("<input>", {"type": "radio", "name": "hobbies"} ),
         $("<span>", {"text": "sport"} ),
         $("<input>", {"type": "radio", "name": "hobbies"} ),
         $("<span>", {"text": "musica"} )
      ],
      "on" : { "click" : function(){
         alert("click event");
      } }
      });   
}
function creazioneSenzaCostruttore()
{
   $("<div>")
   .css({"background-color": "#ddd","width":"200px"})
   .text("Compila il seguente campo:")
   .appendTo(wrapper)
   .onclick( "on" : { "click" : function(){
      alert("click event");
   } }
   });  
}

$(document).ready(function(){	
   wrapper = $("#wrapper")
   ul.push(wrapper.children("ul").first());
   ul.push(wrapper.children("ul").eq(1));
   
})


