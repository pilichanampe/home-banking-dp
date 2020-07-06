//Declaración de variables
var nombreUsuario = "Wade Winston Wilson";
var saldoCuenta = 700;
var limiteExtraccion = 2000;
var password = 1234;
var autorizado = false;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(cantDinero) {
    saldoCuenta = cantDinero + saldoCuenta;
}

function restarDinero(cantDinero) {
    saldoCuenta = saldoCuenta - cantDinero;
}

function cambiarLimiteDeExtraccion() {
    var datosValidos = false;
    var maxLimiteExtraccion = 12000;

    if (autorizado) {
        var nuevoLimiteExtraccion = prompt("Por favor, ingrese su nuevo límite de extracción: ");
        if(nuevoLimiteExtraccion === null) {return}
        while(!datosValidos) {
            if (!isNaN(nuevoLimiteExtraccion)) {
                if (nuevoLimiteExtraccion <= maxLimiteExtraccion) {
                    if (nuevoLimiteExtraccion % 100 == 0) {
                        if (nuevoLimiteExtraccion > 0) {
                           datosValidos = true;
                        }
                        else {
                            alert("No pueden ingresarse montos negativos o iguales a 0.");
                            nuevoLimiteExtraccion = prompt("Por favor, ingrese una cantidad de extracción mayor a 0:");
                            if(nuevoLimiteExtraccion === null) {return}
                        }
                    }
                    else {
                        alert("Solo pueden extraerse billetes de $100, por ende su límite de extracción debe ser múltiplo de 100.");
                        nuevoLimiteExtraccion = prompt("Por favor, ingrese su nuevo límite de extracción (múltiplo de 100):");
                        if(nuevoLimiteExtraccion === null) {return}
                    }
            
                }
                else {   
                    nuevoLimiteExtraccion = prompt("Por seguridad, su límite de extracción no puede exceder los $12000. \nPor favor, ingrese un monto igual o menor al máximo permitido:");
                    if(nuevoLimiteExtraccion === null) {return}
                }
            }
            else {
                nuevoLimiteExtraccion = prompt("Ha ingresado un elemento inválido. Por favor, utilice únicamente números para actualizar su nuevo límite de extracción: ");
                if(nuevoLimiteExtraccion === null) {return}
            }
        }


        nuevoLimiteExtraccion = parseInt(nuevoLimiteExtraccion);
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("Su nuevo límite de extracción es: $" + limiteExtraccion + ".");  
    }
    else {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
      

}

function extraerDinero() {
    var datosValidos = false;

    if (autorizado) {
        var dineroExtraido = prompt("Por favor, ingrese la cantidad de dinero que desea extraer: ");
        if(dineroExtraido === null) {return}
        while(!datosValidos) {
            if (!isNaN(dineroExtraido)) {
                if (dineroExtraido < limiteExtraccion) {
                    if (dineroExtraido < saldoCuenta) {
                        if (dineroExtraido % 100 == 0) {
                            if (dineroExtraido > 0) {
                                datosValidos = true;
                            }
                            else {
                                alert("Seriously?? No pueden ingresarse montos negativos o iguales a 0. Dahh!")
                                dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción mayor a 0:");
                                if(dineroExtraido === null) {return}
                            }
                        }
                        else {
                            alert("Solo pueden extraerse billetes de $100.");
                            dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea múltiplo de 100:");
                            if(dineroExtraido === null) {return}
                        }
                    }
                    else {
                        alert("La cantidad de dinero que desea extraer excede el saldo de su cuenta.");
                        dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea menor o igual a su saldo actual:");
                        if(dineroExtraido === null) {return}
                    }
                }
                else {
                    alert("La cantidad de dinero que desea extraer excede su límite de extracción.");
                    dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea menor o igual a su límite:");
                    if(dineroExtraido === null) {return}
                }
            }
            else {
                dineroExtraido = prompt("Ha ingresado un elemento inválido. Por favor, ingrese la cantidad numerica que desea extraer: ");
                if(dineroExtraido === null) {return}
            }
        }


        dineroExtraido = parseInt(dineroExtraido);
        saldoAnterior = saldoCuenta;
        restarDinero(dineroExtraido);
        actualizarSaldoEnPantalla();
        alert("Ud ha extraido: $" + dineroExtraido + "." + "\nSaldo anterior: $" + saldoAnterior + "." + "\nSaldo actual: $" + saldoCuenta + ".");
        alert("¿¿Que cómo mi HomeBanking permite extraer dinero?? Maaagia Deadpool. Si yo rompo la cuarta pared, mi HomeBanking rompe las leyes de la física.");
        alert("¿¿Que dónde está la plata que acabas de extraer?? Ahhp! Digamos que hoy he recibido una hermosa donación para comprar chimichangas.")
    }
    else {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
      

}

function depositarDinero() {
    var datosValidos = false;

    if (autorizado) {
        var dineroADepositar = prompt("Por favor, ingrese la cantidad de dinero que desea depositar:");
        if(dineroADepositar === null) {return}
        while(!datosValidos) {
            if (!isNaN(dineroADepositar)) {
                if (dineroADepositar % 100 == 0) {
                    if (dineroADepositar > 0) {
                        datosValidos = true;
                    }
                    else {
                        alert("Seriously?? No pueden ingresarse montos negativos o iguales a 0. Dahh!");
                        dineroADepositar = prompt("Por favor, ingrese un valor de depósito mayor a 0:");
                        if(dineroADepositar === null) {return}
                    }
                }
                else {
                     alert("Solo pueden depositarse billetes mayores a $100.")
                     dineroADepositar = prompt("Por favor, ingrese un valor de depósito múltiplo de 100:");
                     if(dineroADepositar === null) {return}
                }
             
            
            }
            else {
                dineroADepositar = prompt("Ha ingresado un elemento inválido. Por favor, ingrese únicamente números para su depósito: ");
                if(dineroADepositar === null) {return}
            }
        }


        dineroADepositar = parseInt(dineroADepositar);
        saldoAnterior = saldoCuenta;
        sumarDinero(dineroADepositar);
        actualizarSaldoEnPantalla();
        alert("Ud ha depositado: $" + dineroADepositar + "." + "\nSaldo anterior: $" + saldoAnterior + "." + "\nSaldo actual: $" + saldoCuenta + ".");
        alert("¡¡Por fin alguien le da de comer a esta cuenta!! \nEsas chimichangas no se compran solas, youknow...");
    }
    else {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
      

}

function pagarServicio() {
   /// var datosValidos = false;
    var confirmPagar = true;

    if (autorizado) {
        var servicioAPagar = prompt("Por favor, ingrese el número que corresponda al servicio que desea pagar: \n1-Teléfono \n2-Luz \n3-Internet \n4- Agua");
        if(servicioAPagar === null) {return}
        servicioAPagar = parseInt(servicioAPagar);
   
        while (true) {
            switch(servicioAPagar) {
                case 1:
                    if(telefono > saldoCuenta) {
                        alert("No tiene saldo suficiente para pagar el servicio de teléfono. \nSu deuda es de $" + telefono + " y solamente tiene $" +saldoCuenta+ " en su cuenta");
                        return;
                    }
                    else {
                        var confirmPagar = confirm("Ud debe $" + telefono + " de teléfono. ¿Desea concretar el pago?"); 
                        if(confirmPagar === false) {
                            alert("Su pago ha sido cancelado.");
                            return;
                        }
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(telefono);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + telefono + "\nSaldo actual: $" + saldoCuenta);
                        return;
                    }
              
                case 2:
                    if(luz > saldoCuenta) {
                        alert("No tiene saldo suficiente para pagar el servicio de teléfono. \nSu deuda es de $" + luz + " y solamente tiene $" +saldoCuenta+ " en su cuenta");
                        return;
                    }
                    else {
                        var confirmPagar = confirm("Ud debe $" + luz + " de luz. ¿Desea concretar el pago?"); 
                        if(confirmPagar === false) {
                            alert("Su pago ha sido cancelado.");
                            return;
                        }
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(luz);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + luz + "\nSaldo actual: $" + saldoCuenta);
                        return;
                    }
                  
                case 3:
                     
                    if(internet > saldoCuenta) {
                        alert("No tiene saldo suficiente para pagar el servicio de teléfono. \nSu deuda es de $" + internet + " y solamente tiene $" +saldoCuenta+ " en su cuenta");
                        return;
                    }
                    else {
                        var confirmPagar = confirm("Ud debe $" + internet + " de internet. ¿Desea concretar el pago?"); 
                        if(confirmPagar === false) {
                            alert("Su pago ha sido cancelado.");
                            return;
                        }
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(internet);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + internet + "\nSaldo actual: $" + saldoCuenta);
                        return;
                    }

                case 4:

                    if(agua > saldoCuenta) {
                        alert("No tiene saldo suficiente para pagar el servicio de teléfono. \nSu deuda es de $" + agua + " y solamente tiene $" +saldoCuenta+ " en su cuenta");
                        return;
                    }
                    else {
                        var confirmPagar = confirm("Ud debe $" + agua + " de agua. ¿Desea concretar el pago?"); 
                        if(confirmPagar === false) {
                            alert("Su pago ha sido cancelado.");
                            return;
                        }
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(agua);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + agua + "\nSaldo actual: $" + saldoCuenta);
                        return;
                    }

                default: 
                    servicioAPagar = prompt("No existe el servicio seleccionado. \nPor favor, ingrese el número que corresponda un servicio existente: \n1-Teléfono \n2-Luz \n3-Internet \n4- Agua");
                    if(servicioAPagar === null) {return;}
                    servicioAPagar = parseInt(servicioAPagar);

            }
        }
    }
    else {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
}
//validaciones
    //si la cantDinero es menor o igual a saldoCuenta
        //else: La cantidad de dinero que desea transferir
function transferirDinero()  {
    var datosValidos = false;

    if (autorizado) {
        var dineroATrans = prompt("Por favor, ingrese la cantidad de dinero que desea transferir: ");
        if(dineroATrans === null) {return};
        dineroATrans = parseInt(dineroATrans);
        while(!datosValidos) {
            if (!isNaN(dineroATrans)) {
                if (dineroATrans <= saldoCuenta){
                    if (dineroATrans > 0) {
                        datosValidos = true;
                    }
                    else {
                        alert("Seriously?? No pueden ingresarse montos negativos o iguales a 0. Dahh!")
                        dineroATrans = prompt("Por favor, ingrese una cantidad de extracción mayor a 0:");
                        if(dineroATrans === null) {return}
                    }
                }
                else {
                    alert("La cantidad de dinero que desea transferir excede el saldo de su cuenta.");
                    return;
                }
            }
            else {
                dineroATrans = prompt("Ha ingresado un elemento inválido. Por favor, ingrese la cantidad numérica que desea transferir: ");
                if(dineroATrans === null) {return}
            }
        }

        cuentaATrans = parseInt(prompt("Por favor, ingrese el número de la cuenta amiga a la que desea transferir el monto de: $" + dineroATrans + "."));

        while(true) {
            switch (cuentaATrans) {
                case cuentaAmiga1:
                    confirmTrans = confirm("Dinero a transferir: $" + dineroATrans + "\nCuenta amiga: " + cuentaAmiga1 + "\n¿Desea concretar la operación?");
                    if(confirmTrans === false) {
                        alert("Su operación ha sido cancelada.");
                        return;
                    }
                    saldoAnterior = saldoCuenta;
                    restarDinero(dineroATrans);
                    actualizarSaldoEnPantalla();
                    alert("La transferencia se ha realizado exitosamente. \nSaldo actual: $" + saldoCuenta + "."); 
                    return;
            
                case cuentaAmiga2:
                    confirmTrans = confirm("Dinero a transferir: $" + dineroATrans + "\nCuenta amiga: " + cuentaAmiga2 + "\n¿Desea concretar la operación?");
                    if(confirmTrans === false) {
                        alert("Su operación ha sido cancelada.");
                        return;
                    }
                    saldoAnterior = saldoCuenta;
                    restarDinero(dineroATrans);
                    actualizarSaldoEnPantalla();
                    alert("La transferencia se ha realizado exitosamente. \nSaldo actual: $" + saldoCuenta + "."); 
                    return;

                default:
                    cuentaATrans = prompt("El número de la cuenta ingresado no corresponde con una cuenta amiga. Por favor, ingrese el número de una cuenta amiga para poder transferir:");
                    if(cuentaATrans === null) {return};
                    cuentaATrans = parseInt(cuentaATrans);
            }
        }

    } else {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
}

function iniciarSesion()  {
   var ingreseSuPassword = prompt("Por favor, ingrese su contraseña: ");
   ingreseSuPassword = parseInt(ingreseSuPassword);

    if (ingreseSuPassword === password) {
        autorizado = true;
        alert("Bienvenido/a, " + nombreUsuario);
       
    }
    else {
        for (i=1; i < 3; i++) {
            if (ingreseSuPassword !== password) {
                ingreseSuPassword = prompt("Su contraseña es incorrecta. Por favor, ingrésela nuevamente:");
                ingreseSuPassword = parseInt(ingreseSuPassword);
            }
            else  {
                autorizado = true;
                alert("Bienvenido/a, " + nombreUsuario);
                break;
            }
        }

        if (i === 3) {
            if (ingreseSuPassword !== password) {
            alert("Por su seguridad, su dinero ha sido retenido. Por favor, diríjase a la sucursal más cercana.");
            saldoCuenta = 0;
            }
            else {
                autorizado = true;
                alert("Bienvenido/a, " + nombreUsuario);
            }
        }
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla()  {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla()  {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Su límite de extracción es: $" + limiteExtraccion;
} 