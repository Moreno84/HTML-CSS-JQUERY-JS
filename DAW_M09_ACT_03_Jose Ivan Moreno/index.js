$(document).ready(function(){

    //Actividad 1 - Estilos con jQuery 

    //1.Al situar el ratón encima de #setBlueColor, establezca el color de fondo de #divTarget a azul.
$('#setBlueColor').mouseover(function(){
    $('#divTarget').css("background-color", "blue");

});
    //2.Al salir el ratón de encima de #setRedColor, establezca el color de fondo de #divTarget a rojo.
$('#setRedColor').mouseout(function(){
    $('#divTarget').css("background-color", "red");

});

    //3.Al clicar sobre #toggleVisible se alterne  entre visible/invisible el div #divTarget.
    $('#toggleVisible').click(function(){
        $('#divTarget').toggle();
    
    });

    //4.Al clicar sobre #incSize aumente en “50px” la altura y "100px" la anchura del elemento #divTarget con una transición de 1.5 segundos.
    $('#incSize').click(function(){
        $('#divTarget').animate({
            width: '+=100px',
            height:'+=50px'
            
        }, 15000);
    });

    //5.Al clicar encima de #movContinuo se mueva continuamente el elemento #divTarget de izquierda a derecha. Para conseguirlo utiliza la propiedad complete de animate para que una vez haya terminado la animación hacia la derecha, llame a una función que realize la animación a la izquierda.
    $('#movContinuo').click(mover);
    
    let moviendo = false;
    function mover (){
        if(!moviendo){
            moviendo = true;
            moveRight();
        }else{
            moviendo = false;
            $('#divTarget').stop();
        }
    }

    function moveRight(){
        $('#divTarget').animate({'left': '300px'},{'duration': 2000, complete: moveLeft});
    }

    function moveLeft(){
        $('#divTarget').animate({'left': 0},{'duration': 2000, complete: moveRight});  
    }

    //Actividad 2  - Modificar el DOM con jQuery 

    //1.Al clicar en #addDiv crea un DIV de la clase .addDiv dentro de #domNodes con el texto  escrito en #text.

    $('#addDiv').click(obtenerDiv);

    function obtenerDiv(){
        //Creamos un nuevo elemento del Dom del tipo DIV
        let newElem = $("<div></div>");
        //obtenemos el valor del input.
        let textoEscrito = $("#text").val();
        //El nuevo elemento tendra el valor del input
        newElem.html(textoEscrito);
        $("#domNodes").append(newElem);

    }

    //2.Al clicar en #addSpan crea un SPAN de la clase .addSpan dentro de #domNodes con el texto  escrito en #text.

    $('#addSpan').click(obtenerSpan);

    function obtenerSpan(){
        let createSpan = $("<span></span>");
        let textoSpan = $("#text").val();
        createSpan.html(textoSpan);
        createSpan.addClass("addSpan");
        $("#domNodes").append(createSpan);

    }

    //3.Al clicar en #addSetContent crea DIV de la clase .setContent dentro de #domNodes con el texto  "SET CONTENT". Clicar encima el div creado establece como contenido del nodo anterior el clicado, el texto escrito en #text.
    
    $('#addSetContent').click(obtenerSet);
    function obtenerSet(){
        let createSetDiv = $("<div>SET CONTENT</div>");
        createSetDiv.addClass("setContent");
        createSetDiv.click(texto);
        $('#domNodes').append(createSetDiv);
    }

    function texto(){
        $(".setContent").html($('#text').val());


    }

    //4.Al clicar en #addDelNode crea DIV de la clase .delNode dentro de #domNodes con el texto  "DEL NODE". Al clicar encima el div creado, eliminalo
    
    $('#addDelNode').click(obtenerNode);
    function obtenerNode(){
    let createNode = $('<div>DEL NODE</div>');
    createNode.addClass('addDelNode');
    createNode.click(eliminarNode);
    $('#domNodes').append(createNode);

    function eliminarNode(){
    
        createNode.remove()
    }

    

    }




});
