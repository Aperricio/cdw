
        "use strict"; // Modo Estricto. No permite, por ejemplo, usar variables no declaradas.
        let anyoHoy = new Date().getFullYear();
        let mesHoy = new Date().getMonth();
        let anyoNacimiento = 0;
        let mesNacimiento = 0;
        const mayorDeEdad = 18;
        function calculoEdad() {
            return anyoHoy - anyoNacimiento
        } // Si anyoHoy y anyoNacimiento no fueran variables declaradas, sería necesario declarar una nueva variable para obtener algún resultado. Al existir ambas, es suficiente si se le pide que nos "devuelva" o "saque" el resultado de la operación.

        while (( parseInt(anyoNacimiento) < 1 ) || ( isNaN(anyoNacimiento) )) {
            anyoNacimiento = parseInt(prompt("Escriba el año de nacimiento"));
        }

        if (( anyoNacimiento >= 0 ) && ( anyoNacimiento <= ( anyoHoy - 2000 ) )) {
            anyoNacimiento = anyoNacimiento + 2000;
        }
        
        if (( anyoNacimiento > ( anyoHoy - 2000 ) ) && ( anyoNacimiento <= 99 )) {
            anyoNacimiento = anyoNacimiento + 1900;
        }
            
        
        if  ( calculoEdad() <  mayorDeEdad ) {
             location.href="https://youtubekids.com";
        } 

        else {
            if ( calculoEdad() > mayorDeEdad) {
            alert("Puede entrar. \n\nLo que pasa en Caçallaland, se queda en Caçallaland");
            }

            if ( calculoEdad() == mayorDeEdad ) {
                while (( parseInt(mesNacimiento) < 1 ) || (( parseInt(mesNacimiento) > 12)) || ( isNaN(mesNacimiento) )) {
                mesNacimiento = parseInt(prompt("¿En qué mes (en número) naciste?"));
                }
            
                if ( mesNacimiento >= ( mesHoy + 1) ) { // hay que sumar 1 porque empieza a contar desde 0; enero es 0
                        location.href="https://youtubekids.com";  
                } 
                
                else  {
                    alert("Puede entrar. \n\nLo que pasa en Caçallaland, se queda en Caçallaland");
                }
            }
        }