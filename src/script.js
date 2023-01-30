function validate() {

    /* En la variable cardNumber almaceno el valor ingresado 
    en el elemento de HTML (input) con id "cardnumber". */
    const cardNumber = document.getElementById("cardnumber").value;

    /* Compruebo si el valor ingresado está vacío (length), 
    contiene sólo espacios en blanco (test) o no es un número (isNan). */
    if (cardNumber.length === 0 || /^\s+$/.test(cardNumber) || isNaN(cardNumber)) {

    /* Si cualquiera de estas condiciones se cumple, 
    muestro una alerta y la función se detiene (return). */
    alert("Por favor, introduce un número.");
    return;
    } 

    /* Si el valor ingresado es válido, divido el array en dígitos (split), 
        convierto cada dígito en número (map), e invierto el orden (reverse). */
    else {
        let array = cardNumber.split("").map(Number).reverse();

        // Declaro variables que usaré después y les asigno el valor 0.
        let sumPares = 0;
        let sumImpares = 0;

        // Con un bucle for recorro el arreglo dígito por dígito.
        for (let i = 0; i < array.length; i++) {

            /* Determino los índices pares: el residuo de la división 
            del índice entre 2 debe ser estrictamente igual a 1. */
            if (i % 2 === 1) {

                /* Si el índice es par, multiplico su valor por 2 
                y almaceno el producto en la variable prodPares. */
                let prodPares = array[i] * 2;

                // Veo si el producto es mayor o igual a 10.
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
        }
        // Sumo pares e impares.
        let sumTotal = sumImpares + sumPares;

        /* Si el producto de dividir la suma total entre 10 es igual a 0, muestro la 
        alerta "Tarjeta válida". */
        if (sumTotal % 10 === 0) {
            alert("Tarjeta válida");

        /* De lo contrario, muestro la alerta "Tarjeta inválida". */
        } else {
            alert("Tarjeta inválida");
        }
    }
}

