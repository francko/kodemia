$(document).ready(function() {
    if(!localStorage.getItem("commentArray")){
        localStorage.setItem("commentArray", JSON.stringify([{
            dataName: "franco",
            dataMail: "fco.mtz@unam.mx",
            dataComment: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
            dataDate:time,
        }]));

        listComments = localStorage.getItem("commentArray");
        listComments = JSON.parse(listComments);
        printComments();

    }else{

        listComments = localStorage.getItem("commentArray");
        listComments = JSON.parse(listComments);
        printComments();
    }
});

var dt = new Date();
var time = dt.getDay() + "/" +
           dt.getMonth() + "/" +
           dt.getFullYear() + " " +
           dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

var listComments;

function printComments(){

    $("#list-comment").empty();
    for ( i = listComments.length; i >= 0, i--;) {

        var objComment = listComments[i];
        var rowHtml = "<div class=\"d-flex w-100 justify-content-between\">" +
                            "<h5 class=\"mb-1\">" + objComment.dataName + "</h5>" +
                            "<small>" + objComment.dataDate + "</small>" +
                        "</div>" +
                        "<p class=\"mb-1\">"+ objComment.dataComment + "</p>" +
                        "<hr/>";

        $("#list-comment").append(rowHtml);
    }
        
}

function getCommentData(){

    var name = $("#name").val();
    var mail = $("#mail").val();
    var comment = $("#comment").val();
    var date = time;
    
    // Validación
    if(name === ""){
        alert("¡Nombre no puede estar vacio!");
        return false;
    }
    if(mail === ""){
        alert("¡Correo electrónico no puede estar vacio!");
        return false;
    }
    if(comment === ""){
        alert("Debes agregar un comentario...");
        return false;
    }   

    var objComment = {
        dataName: name,
        dataMail: mail,
        dataComment: comment,
        dataDate: date,
    }

    listComments.push(objComment);
    
    printComments();
    $("#comment-form input").val("");

    var commentString = JSON.stringify(listComments)
    localStorage.setItem("commentArray", commentString);
}

$("#submit-button").on("click", function(){
    getCommentData();
});
