"use strict"

const COLONNE = 7;
const RIGHE = 6;
const ROSSO = "rgb(255, 0, 0)";
const GIALLO = "rgb(255, 255, 0)";
const GRIGIO = "rgb(176, 176, 176)";

let turno = GIALLO;

$(document).ready(function () {
    let header = $("#header");
    let wrapper = $("#wrapper");

    for (let i = 0; i < COLONNE; i++) {
        let div = $("<div>").addClass("pedina").appendTo(header).css({ "background-color": GRIGIO });
        div.on("mouseenter", function() {
            $(this).css({ "background-color": turno });
        });
        div.on("mouseleave", function () {
            //""toglie quello messo dinamicamente
            $(this).css({ "background-color": "" });
        })
        div.on("click", function discesa () {
            let colonna = header.children().index($(this));
            let riga = 0;
            while (riga < RIGHE && wrapper.children(`#div-${riga}-${colonna}`).css("background-color") == GRIGIO) {
                riga++;
            }
            riga--;
            if (riga < 0)
                alert("Mossa non valida");
            else {
                let newPedina = $("<div>").addClass("pedina").appendTo(wrapper);
                newPedina.css({
                    "background-color": turno,
                    "position": "absolute",
                    "top": -60,
                    "left": colonna * 60 + 5
                });
                let color = turno;
                if (turno == GIALLO)
                    turno = ROSSO;
                else
                    turno = GIALLO;
                header.children().off("click");
                $(this).trigger("mouseenter");
                newPedina.animate({ "top": riga * 60 + 5 }, 200 * (riga + 1), function () {
                    $(`#div-${riga}-${colonna}`).css({ "background-color": color });
                    header.children().on("click", discesa);
                });
                
            }

        })
    }

    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            $("<div>").addClass("pedina").appendTo(wrapper)
                .css({ "background-color": GRIGIO }).prop("id", `div-${i}-${j}`);
        }
    }
});