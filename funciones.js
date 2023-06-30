function verificarEdad(){
    var num = parseInt(document.getElementById("edad").value);

    if(isNaN(num)){
        num = null;
        alert("Debe digiar un valor numérico entero.");
    }
    else{
        if(num >= 0 && num <= 17){
            alert("Usted es menor de edad");
        }
        else{
            alert("Usted es mayor de edad");
        }   
    }
}

function mostrarFecha(){
    var fecha = new Date();

        // Obtener los componentes de la fecha
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1; // Los meses comienzan en 0, por lo que se suma 1
        var anio = fecha.getFullYear();

        // Formatear la fecha como "dd/mm/aaaa"
        var fechaFormateada = dia + "/" + mes + "/" + anio;

        // Mostrar la fecha en el elemento <p> con id "fechaActual"
        document.getElementById("fechaActual").textContent = "Fecha de hoy: " + fechaFormateada;
}

function diaSemana(dia){
    try{
        switch(dia)
        {
            case "0":
                alert("Usted ha escogido el día Lunes para su cita");
                break;
            case "1":
                alert("Usted ha escogido el día Martes para su cita");
                break;
            case "2":
                alert("Usted ha escogido el día Miércoles para su cita");
                break;
            case "3":
                alert("Usted ha escogido el día Jueves para su cita");
                break;
            case "4":
                alert("Usted ha escogido el día Viernes para su cita");
                break;
            case "5":
                alert("Usted ha escogido el día Sábado para su cita");
                break;
            case "6":
                alert("Usted ha escogido el día Domingo para su cita");
                break;
        }
    }catch(error){
        alert("Error al escoger el día. El detalle del error es el siguiente: " + error);
    }
}

function abonar(){
    var numeroTotal = document.getElementById("total");
    var numeroInput = document.getElementById("montoAbono");

    var numTotal = parseInt(numeroTotal.textContent);
    var numInput = parseInt(numeroInput.value);

    if (isNaN(numInput)) {
        alert("Ingrese un número válido");
    } 

    if (!Number.isInteger(parseFloat(numInput)) || parseInt(numInput) < 0) {
        alert("Ingrese un número positivo entero")
    }
    else {
        var resultado = Math.abs(numTotal + numInput);
        numeroTotal.textContent = resultado + "₡";
    }
    document.getElementById("montoAbono").value = "";
}

function reset(){
    document.getElementById("total").innerHTML="0₡"
}

function iniciarContador() {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = "Cargando...";
  
    for (var contador = 1; contador <= 10; contador++) {
      (function(numero) {
        setTimeout(function() {
          var mensaje = "Cargando";
  
          switch (numero % 4) {
            case 1:
              mensaje += ".";
              break;
            case 2:
              mensaje += "..";
              break;
            case 3:
              mensaje += "...";
              break;
          }
  
          mensajeElemento.textContent = mensaje;
        }, numero * 1000);
      })(contador);
    }
  
    setTimeout(function() {
      mensajeElemento.textContent = "Cita Confirmada";
    }, 11000);
}

function convertirMayusculas() {
    // Obtener el elemento <p> por su ID
    var elemento = document.getElementById("fechaActual");
  
    // Obtener el texto del elemento
    var texto = elemento.textContent;
  
    // Convertir el texto a mayúsculas
    var textoMayusculas = texto.toUpperCase();
  
    // Actualizar el contenido del elemento con el texto en mayúsculas
    elemento.textContent = textoMayusculas;
}

function cambiarPaciente(){
    document.getElementById("paciente").innerHTML="Paciente: Mario Hernández";
}

var arreglo = ["Acetaminofen", "Nueces"];

function mostrarArreglo() {
  document.getElementById("output").textContent = arreglo.join(" -- ");
}

function agregarElemento() {
  var inputText = document.getElementById("inputText").value;
  if (inputText !== "") {
    arreglo.push(inputText);
    mostrarArreglo();
    document.getElementById("inputText").value = "";
  }
}

function eliminarElemento() {
  if (arreglo.length > 0) {
    arreglo.pop();
    mostrarArreglo();
  }
}