"option strict"

const URL = "http://localhost:3000"

$(document).ready(function () {
    let _lstMarche = $("#lstMarche");
    let _lstModelli = $("#lstModelli");
	let _table= $("table")
	let _dettagli=$(".row").eq(2).children("div").eq(1)
  
    _dettagli.hide()
    
    let request = inviaRichiesta("GET", URL+"/marche");
    request.fail(errore);
    request.done(function(marche){
        //console.log(marche);
        for (const item of marche) {
            $("<option>").appendTo(_lstMarche).html(item.nome).val(item.id);
        }
        _lstMarche.prop("selectedIndex", -1);
    });
    
    _lstMarche.on("change", function(){
        let id= _lstMarche.val();
        let request = inviaRichiesta("GET", URL+"/modelli", {"codMarca": id} );
        request.fail(errore);
        request.done(function(data){
            _lstModelli.html("");
            for (const item of data) {
                $("<option>").appendTo(_lstModelli).html(item.nome+" "+item.alimentazione).val(item.id).prop("modello", item);
            }
            _lstModelli.prop("selectedIndex", -1);
        });
    });
    
    _lstModelli.on("change", function(){
        let id = _lstModelli.val();
        //Accedo al testo della voce selezionata
        //let text = _lstModelli.children("option:selected").html();
        let nome = _lstModelli.children("option:selected").prop("modello").nome;
        let alimentazione = _lstModelli.children("option:selected").prop("modello").nome;

        let request  = inviaRichiesta("GET", URL+"/automobili", {"codModello" : _lstModelli.val()});
        request.fail(errore);
        request.done(function(data){
                let thead = $("<thead>").appendTo(_table);
                 let tr = $("<tr>").appendTo(thead);
                 $("<th>").appendTo(tr).html("nome");
                 $("<th>").appendTo(tr).html("alimentazione");
                 $("<th>").appendTo(tr).html("colore");
                 $("<th>").appendTo(tr).html("anno");
                 $("<th>").appendTo(tr).html("img");
                 $("<th>").appendTo(tr).html("dettagli");
                 $("<th>").appendTo(tr).html("Elimina");

                 let tbody = $("<tbody>").appendTo(_table);
                for (const item of data) {
                    let tr = $("<tr>");
                    $("<td>").appendTo(tr).html();
                    $("<td>").appendTo(tr).html(item.alimentazione);
                    $("<td>").appendTo(tr).html(item.colore);
                    $("<td>").appendTo(tr).html(item.anno);
                    $("<td>").appendTo(tr).html(item.img);
                    $("<td>").appendTo(tr).html(item.dettagli);
                    $("<td>").appendTo(tr).html(item.Elimina);
            }
        })
    })

});


