// ================================
// ELEMENTOS
// ================================

const formulario = document.getElementById("formPago");
const numeroTarjeta = document.getElementById("numeroTarjeta");
const titular = document.getElementById("titular");
const fecha = document.getElementById("fecha");
const cvv = document.getElementById("cvv");

const modal = new bootstrap.Modal(document.getElementById("modalPago"));


// ================================
// NÚMERO DE TARJETA
// ================================

numeroTarjeta.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 16);

    valor = valor.replace(/(.{4})/g, "$1 ").trim();

    this.value = valor;

});


// ================================
// FECHA MM/AA
// ================================

fecha.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 4);

    if (valor.length >= 3) {
        valor = valor.substring(0,2) + "/" + valor.substring(2);
    }

    this.value = valor;

});


// ================================
// CVV
// ================================

cvv.addEventListener("input", function(){

    this.value = this.value.replace(/\D/g,"").substring(0,3);

});


// ================================
// SOLO LETRAS EN EL TITULAR
// ================================

titular.addEventListener("input", function(){

    this.value = this.value.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÑñ ]/g,"");

});


// ================================
// VALIDAR FECHA
// ================================

function fechaValida(fechaTexto){

    if(!fechaTexto.includes("/")) return false;

    let partes = fechaTexto.split("/");

    if(partes.length !== 2) return false;

    let mes = parseInt(partes[0]);
    let año = parseInt(partes[1]);

    if(isNaN(mes) || isNaN(año))
        return false;

    if(mes < 1 || mes > 12)
        return false;

    return true;

}


// ================================
// VALIDAR FORMULARIO
// ================================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(numeroTarjeta.value.trim() === ""){

        numeroTarjeta.focus();
        return;

    }

    if(numeroTarjeta.value.length < 19){

        alert("Ingrese un número de tarjeta válido.");
        numeroTarjeta.focus();
        return;

    }

    if(titular.value.trim() === ""){

        titular.focus();
        return;

    }

    if(!fechaValida(fecha.value)){

        alert("Ingrese una fecha válida.");
        fecha.focus();
        return;

    }

    if(cvv.value.length !== 3){

        alert("Ingrese un CVV válido.");
        cvv.focus();
        return;

    }

    // Mostrar modal
    modal.show();

});


// ================================
// LIMPIAR FORMULARIO
// ================================

const ventanaModal = document.getElementById("modalPago");

ventanaModal.addEventListener("hidden.bs.modal", function(){

    formulario.reset();

});


// ================================
// ENTER ENVÍA EL FORMULARIO
// ================================

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        if(document.activeElement.tagName !== "TEXTAREA"){

            e.preventDefault();

            formulario.requestSubmit();

        }

    }

});