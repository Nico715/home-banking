//Declaración de variables
var nombreUsuario = "Nicolás Rizzo";
var saldoCuenta = 10000;
var limiteExtraccion = 1000;


//Variables de servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Variables de transferencia
var amigoUno = 1234567;
var amigoDos = 7654321;

//Variables de inicio de sesion
var contraseña = prompt("Ingresar contraseña");
var codigoDeSeguridad = 1234;
iniciarSesion();

//Verificación de numero


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumarDinero (monto) {
    saldoCuenta += monto;
}

function restarDinero (monto) {
    saldoCuenta -= monto;
}


//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {
    var limiteNuevo = prompt("Nuevo limite de extracción");
    if (limiteNuevo === null){
        return;
    }
    limiteNuevo=parseInt(limiteNuevo);
    if(isNaN(limiteNuevo)) {
        alert("Ingrese un número válido");
        return;
    }
    var limiteAnterior = limiteExtraccion;
    limiteExtraccion = limiteNuevo;
    actualizarLimiteEnPantalla();
    alert("Tu limite anterior era de $" + limiteAnterior + "\n Tu nuevo limtie es de $" + limiteExtraccion);
}

function extraerDinero() {
    var extraccion = prompt("Monto a Extracción");
    if (extraccion === null){
        return;
    }
    extraccion=parseInt(extraccion);
    if(isNaN(extraccion)) {
        alert("Ingrese un número válido");
        return;
    }
    var saldoAnterior = saldoCuenta;
    if (extraccion%100==0){
        if( extraccion>saldoCuenta) {
            noHaySaldoDisponible ();
            }
        else if (extraccion>limiteExtraccion)  {
            limiteSuperado ();
            }
        else { restarDinero(extraccion);
            alert("Extrajiste $" + extraccion + "\n Tu saldo anterior era de $" + saldoAnterior + "\n Tu saldo actual es de $" + saldoCuenta);
            }
            actualizarSaldoEnPantalla();
        }
    else {
        alert("Solo puedes extraer billetes de 100.")
    }
}


function depositarDinero() { 
    var deposito = prompt("Monto a Depositar");
    if (deposito === null) {
        return;
    }
    deposito = parseInt(deposito);
    if(isNaN(deposito)){
        alert("Ingrese un número válido");
        return;
    }
    var saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert("Despositaste $" + deposito + "\n Tu saldo anterior era de $" + saldoAnterior + "\n Tu saldo actual es de $" + saldoCuenta);
}

function pagarServicio() {
    var servicio = (prompt("Ingrese el número que corresponda con el servicio que desea pagar: \n 1-Agua \n 2-Telefono \n 3-Luz \n 4-Internet"));
        if (servicio === null){
            return;
        }
        servicio = parseInt(servicio);
    switch (servicio) {
        case 1: servicio = agua;
        nombreServicio = "Agua"
        break;
        case 2: servicio = telefono;
        nombreServicio = "Teléfono"
        break;
        case 3: servicio = luz;
        nombreServicio = "Luz"
        break;
        case 4: servicio = internet;
        nombreServicio = "Internet"
        break;
        default: alert("No existe el servicio que se ha seleccionado.");
        return;
    }
    if (servicio>saldoCuenta) { noHaySaldoDisponible () }
        else {  saldoAnterior = saldoCuenta;
            restarDinero(servicio);
        actualizarSaldoEnPantalla();
        alert(" Has pagado el servicio de " + nombreServicio + "\n Tu saldo anterior era de $" + saldoAnterior + "\n Pagaste $" + servicio + "\n Tu saldo actual es de $" + saldoCuenta); }     
       
}


function transferirDinero() {
    var transferencia = prompt("Monto a Transferir");
        if (transferencia === null){
            return;
    }
        transferencia=parseInt(transferencia);
        if(isNaN(transferencia)) {
            alert("Ingrese un número válido");
            return;
    }
    if( transferencia>saldoCuenta) {
        noHaySaldoDisponible ();
        }
    else { var cuentaAmiga = parseInt(prompt("Digite el número de cuenta a la que desea realizar la transferencia"));
        if (cuentaAmiga === amigoUno || cuentaAmiga === amigoDos) {
            saldoAnterior = saldoCuenta;
            restarDinero(transferencia); 
            actualizarSaldoEnPantalla();
            alert("Se han transferido $" +transferencia + "\nCuenta destino: " + cuentaAmiga);
        }
        else {
            alert("Solo puedes transferir dinero a cuentas Amigas.");
            return
    }
        
    }
}

function iniciarSesion() {
    if (contraseña==codigoDeSeguridad){
        alert("Bienvenido " + nombreUsuario + ", ya puedes comenzar a operar.");
    }
    else {
        alert("Código incorrecto, tu dinero ha sido retenido por cuestiones de seguridad.");
        saldoCuenta = 0;
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Funciones nuevas

function noHaySaldoDisponible () {
    alert("No hay suficiente dinero en la cuenta.");
}
    
function limiteSuperado () {
    alert("La cantidad de dinero que deseas extraer es mayor al límite de extracción.");
}



