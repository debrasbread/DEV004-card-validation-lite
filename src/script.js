// La función validate se activa al dar clic en el botón (HTML la llama).
function validate() {

    /* En la variable cardNumber almaceno el valor ingresado 
    en el input (HTML) con id "cardnumber". */    
    const cardNumber = document.getElementById("cardnumber").value;

    /* Compruebo si el valor ingresado está vacío (length), 
    contiene sólo espacios en blanco (test) o no es un número (isNan). */
    if (cardNumber.length === 0 || /^\s+$/.test(cardNumber) || isNaN(cardNumber)) {
   
        /* Si cualquiera de estas condiciones se cumple, 
        muestro una alerta y la función se detiene (return). */        
        alert("Por favor, introduce un número.");
        return;
    }
        /* De lo contrario (si el valor es válido), llamo a la función 
        isValid con la variable cardNumber como argumento. */
        else {
            isValid(cardNumber);
        }
    }
// La función isValid actuará sobre cardNumber.
function isValid(cardNumber) {

    /* Convierto el valor ingresado en un array que divido en dígitos (split), 
    convierto cada dígito en número (map), e invierto su orden (reverse). */
    if (array = cardNumber.split("").map(Number).reverse()) {
             
        // Declaro las variables que usaré más adelante.
        let sumPares = 0;
        let sumImpares = 0;
    
        // Con un bucle for recorro cada uno de los elementos del array.
        for (let i = 0; i < array.length; i++) {

            /* Determino los índices pares: el residuo de la división 
            del índice entre 2 debe ser estrictamente igual a 1. */
            if (i % 2 === 1) {

                /* Si el índice es par, multiplico su valor por 2 
                y almaceno el producto en la variable prodPares. */
                let prodPares = array[i] * 2;

                // Determino si el producto es mayor o igual a 10.
                if (prodPares >= 10) {

                    /* Con Math.floor sumo los dígitos de los productos mayores o 
                    iguales a 10 y almaceno el resultado en la variable sumPares */
                    sumPares += Math.floor(prodPares / 10) + (prodPares % 10);
                } 
                // Si el producto (prodPares) no es mayor o igual al 10, se acumula en sumPares.
                else {
                    sumPares += prodPares;
                }  
            }
            // Si el índice es impar, su valor se acumula en sumImpares.
            else {
                sumImpares += array[i];
            }
        }   // Sumo pares e impares.
            let sumTotal = sumImpares + sumPares;

        /* Si el producto de dividir la suma total entre 10 es igual a 0, muestro la 
        alerta "Tarjeta válida". */
        if (sumTotal % 10 === 0) {
            alert("Tarjeta válida");
            }
        /* De lo contrario, muestro la alerta "Tarjeta inválida". */ 
        else {
            alert("Tarjeta inválida");
        }
    } 
    }