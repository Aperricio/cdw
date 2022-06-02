/* Falta comprobar los cálculos de TIEMPO */


/* -------------------------------------------------------------------------- */
/*                                  Distancia                                 */
/* -------------------------------------------------------------------------- */
function intercambiarDistancia() {
    let valorDistancia1 = document.getElementById("distancia1").value;
    let valorDistancia2 = document.getElementById("distancia2").value;
    document.getElementById("distancia1").value = valorDistancia2;
    document.getElementById("distancia2").value = valorDistancia1;
    distancia();
}

function distancia() {

    while (( document.getElementById("distancia1").value == "Elije opción") || ( document.getElementById("distancia2").value == "Elije opción") ) {
        alert('Elige dos opciones válildas');
        return;
    }

    while ( document.getElementById("distancia1").value == document.getElementById("distancia2").value) {
        alert('No se puede convertir una medida a si misma');
        return;
    }
 
    let distancia1 = document.getElementById("distancia1").value;
    let distancia2 = document.getElementById("distancia2").value;

    /* METROS */
    

    if ( distancia1 == "Metros" && distancia2 == "Pulgadas") {
        function metrosToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 39.37;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToPulgadas().toFixed(5));
    }

    if ( distancia1 =="Metros" && distancia2 == "Centímetros") {
        function metrosToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 100;   
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Kilómetros") {
        function metrosToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToKilometros().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Millas") {
        function metrosToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1609.34;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToMillas().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Pies") {
        function metrosToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 3.28084;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToPies().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Yardas") {
        function metrosToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.09361;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToYardas().toFixed(5));
    }

    if ( distancia1 =="Metros" && distancia2 == "Codos") {
        function metrosToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.4572;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToCodos().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Leguas") {
        function metrosToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.000238095238095;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToLeguas().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 =="Milimetros") {
        function metrosToMilimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToMilimetros().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Micrometros") {
        function metrosToMicrometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1e+6;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToMicrometros().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "Nanometros") {
        function metrosToNanometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1e+9;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToNanometros().toFixed(5));
    }

    if ( distancia1 == "Metros" && distancia2 == "MillasNauticas") {
        function metrosToMillasNauticas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1852;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(metrosToMillasNauticas().toFixed(5));
    }

    /* PULGADAS */

    if ( distancia1 == "Pulgadas" && distancia2 == "Metros") {
        function pulgadasToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 39.37;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToMetros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Centímetros") {
        function pulgadasToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 2.54;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Kilómetros") {
        function pulgadasToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 39370.079;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToKilometros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Millas") {
        function pulgadasToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 63360;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToMillas().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Pies") {
        function pulgadasToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 12;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToPies().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Yardas") {
        function pulgadasToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 36;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToYardas().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Codos") {
        function pulgadasToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 36;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToCodos().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Leguas") {
        function pulgadasToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.00000604761904762;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToLeguas().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Milimetros") {
        function pulgadasToMilimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 25.4;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToMilimetros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Micrometros") {
        function pulgadasToMicrometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 25400;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToMicrometros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "Nanometros") {
        function pulgadasToNanometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 25400000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToNanometros().toFixed(5));
    }

    if ( distancia1 == "Pulgadas" && distancia2 == "MillasNauticas") {
        function pulgadasToMillasNauticas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.0000137149028078;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(pulgadasToMillasNauticas().toFixed(5));
    }

    /* CENTÍMETROS */

    if ( distancia1 == "Centímetros" && distancia2 == "Metros") {
        function centimetrosToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 100;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToMetros().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Pulgadas") {
        function centimetrosToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 2.54;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Kilómetros") {
        function centimetrosToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 100000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToKilometros().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Millas") {
        function centimetrosToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 160934;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToMillas().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Pies") {
        function centimetrosToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 30.48;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToPies().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Yardas") {
        function centimetrosToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 91.44;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToYardas().toFixed(5)); 
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Codos") {
        function centimetrosToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.02197265625;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (centimetrosToCodos().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Leguas") {
        function centimetrosToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.00000238095238095;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToLeguas().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Milimetros") {
        function centimetrosToMilimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 10;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToMilimetros().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Micrometros") {
        function centimetrosToMicrometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 10000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToMicrometros().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "Nanometros") {
        function centimetrosToNanometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1e+7;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToNanometros().toFixed(5));
    }

    if ( distancia1 == "Centímetros" && distancia2 == "MillasNauticas") {
        function centimetrosToMillasNauticas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.00000539956803456;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(centimetrosToMillasNauticas().toFixed(5));
    }

    /* KILÓMETROS */
    
    if ( distancia1 == "Kilómetros" && distancia2 == "Metros") {
        function kilometrosToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToMetros().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Pulgadas") {
        function kilometrosToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 39370.079;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Centímetros") {
        function kilometrosToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 100000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Millas") {
        function kilometrosToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1.60934;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToMillas().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Pies") {
        function kilometrosToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 3280.84;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToPies().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Yardas") {
        function kilometrosToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1093.61;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToYardas().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Codos") {
        function kilometrosToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 2187.2265966754;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToCodos().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Leguas") {
        function kilometrosToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.238095238095;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToLeguas().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Milimetros") {
        function kilometrosToMilimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1000000;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToMilimetros().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Micrometros") {
        function kilometrosToMicrometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1e+9;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToMicrometros().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "Nanometros") {
        function kilometrosToNanometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1e+12;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToNanometros().toFixed(5));
    }

    if ( distancia1 == "Kilómetros" && distancia2 == "MillasNauticas") {
        function kilometrosToMillasNauticas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.539956803456;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(kilometrosToMillasNauticas().toFixed(5));
    }

    /* MILLAS */

    if ( distancia1 == "Millas" && distancia2 == "Metros") {
        function millasToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1609.34;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToMetros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Pulgadas") {
        function millasToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 63360;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Centímetros") {
        function millasToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 160934;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Kilómetros") {
        function millasToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.60934;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToKilometros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Pies") {
        function millasToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 5280;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToPies().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Yardas") {
        function millasToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1760;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToYardas().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Codos") {
        function millasToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 3520;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToCodos().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Leguas") {
        function millasToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.383177142857;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToLeguas().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Milimetros") {
        function millasToMilimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.609e+6;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToMilimetros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Micrometros") {
        function millasToMicrometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.609e+9;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToMicrometros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "Nanometros") {
        function millasToNanometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.609e+12;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToNanometros().toFixed(5));
    }

    if ( distancia1 == "Millas" && distancia2 == "MillasNauticas") {
        function millasToMillasNauticas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1.150779;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(millasToMillasNauticas().toFixed(5));
    }


    /* PIES */

    if ( distancia1 == "Pies" && distancia2 == "Metros") {
        function piesToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 0.3048;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(piesToMetros().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Pulgadas") {
        function piesToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 12;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(piesToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Centímetros") {
        function piesToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 30.48;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(piesToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Kilómetros") {
        function piesToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 3280.84;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(piesToKilometros().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Millas") {
        function piesToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 5280;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(piesToMillas().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Yardas") {
        function piesToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.333333;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (piesToYardas().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Codos") {
        function piesToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.6667;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (piesToCodos().toFixed(5));
    }

    if ( distancia1 == "Pies" && distancia2 == "Leguas") {
        function piesToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.0000725714285714;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (piesToLeguas().toFixed(5));
    }

    /* YARDAS */
    
    if ( distancia1 == "Yardas" && distancia2 == "Metros") {
        function yardasToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1.094;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (yardasToMetros().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Pulgadas") {
        function yardasToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 36;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (yardasToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Centímetros") {
        function yardasToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 91.44;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (yardasToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Kilómetros") {
        function yardasToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1093.61;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (yardasToKilometros().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Millas") {
        function yardasToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) / 1760;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(yardasToMillas().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Pies") {
        function yardasToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 3;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(yardasToPies().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Codos") {
        function yardasToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 3;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(yardasToCodos().toFixed(5));
    }

    if ( distancia1 == "Yardas" && distancia2 == "Leguas") {
        function yardasToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.000217714285714;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(yardasToLeguas().toFixed(5));
    }

    /* CODOS */

    if ( distancia1 == "Codos" && distancia2 == "Metros") {
        function codosToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.4572;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToMetros().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Pulgadas") {
        function codosToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 18;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Centímetros") {
        function codosToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 45.72;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Kilómetros") {
        function codosToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.0004536;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToKilometros().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Millas") {
        function codosToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.0022046;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToMillas().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Pies") {
        function codosToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 1.5;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToPies().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Yardas") {
        function codosToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.45;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToYardas().toFixed(5));
    }

    if ( distancia1 == "Codos" && distancia2 == "Leguas") {
        function codosToLeguas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 0.0001;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(codosToLeguas().toFixed(5));
    }

    /* LEGUAS */
    
    if ( distancia1 == "Leguas" && distancia2 == "Metros") {
        function leguasToMetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 4200;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(leguasToMetros().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Pulgadas") {
        function leguasToPulgadas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 165354.330709;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(leguasToPulgadas().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Centímetros") {
        function leguasToCentimetros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 420000 ;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (leguasToCentimetros().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Kilómetros") {
        function leguasToKilometros() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 4.2;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(leguasToKilometros().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Millas") {
        function leguasToMillas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 2.6097590074 ;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(leguasToMillas().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Pies") {
        function leguasToPies() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 13779.5275591;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (leguasToPies().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Yardas") {
        function leguasToYardas() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 4593.17585302 ;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = (leguasToYardas().toFixed(5));
    }

    if ( distancia1 == "Leguas" && distancia2 == "Codos") {
        function leguasToCodos() {
            let resultado = parseFloat(document.getElementById('numerodistancia').value) * 12152.230981385;
            return resultado;
        }
        document.getElementById("resultadodistancia").value = parseFloat(leguasToCodos().toFixed(5));
    }
}


/* -------------------------------------------------------------------------- */
/*                                    MASA                                    */
/* -------------------------------------------------------------------------- */

function intercambiarMasa() {
    let valorMasa1 = document.getElementById("masa1").value;
    let valorMasa2 = document.getElementById("masa2").value;
    document.getElementById("masa1").value = valorMasa2;
    document.getElementById("masa2").value = valorMasa1;
    masa();
}

function masa() {

    while (( document.getElementById("masa1").value == "Elije opción") || ( document.getElementById("masa2").value == "Elije opción") ) {
        alert('Elige dos opciones válildas');
        return;
    }

    while ( document.getElementById("masa1").value == document.getElementById("masa2").value) {
        alert('No se puede convertir una medida a si misma');
        return;
    }
 
    let masa1 = document.getElementById("masa1").value;
    let masa2 = document.getElementById("masa2").value;

    /* KILOGRAMOS */

    if ( masa1 == "Kilogramos" && masa2 =="Gramos") {
        function kgToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToGramos().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2 == "Toneladas") {
        function kgToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToToneladas().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2== "Miligramos") {
        function kgToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToMiligramos().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2 == "Microgramos") {
        function kgToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToMicrogramos().toFixed(5));
    }
        
    if ( masa1 == "Kilogramos" && masa2 == "Toneladas") {
        function kgToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToToneladas().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2 == "Stones") {
        function kgToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 6.35;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToStones().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2 == "Libras") {
        function kgToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 2.2046;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToLibras().toFixed(5));
    }

    if ( masa1 == "Kilogramos" && masa2 == "Onzas") {
        function kgToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 35.274;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(kgToOnzas().toFixed(5));
    }

    /* GRAMOS */
    
    if ( masa1 == "Gramos" && masa2 == "Kilogramos") {
        function gramosToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToKilogramos().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Toneladas") {
        function gramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Miligramos") {
        function gramosToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToMiligramos().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Microgramos") {
        function gramosToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Toneladas") {
        function gramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e-6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Stones") {
        function gramosToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 6350;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToStones().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Libras") {
        function gramosToLibras() {
            let resultado = (document.getElementById('numeromasa').value) / 453.6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToLibras().toFixed(5));
    }

    if ( masa1 == "Gramos" && masa2 == "Onzas") {
        function gramosToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 28.35;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(gramosToOnzas().toFixed(5));
    }

    /* TONELADAS */

    if ( masa1 == "Toneladas" && masa2 == "Kilogramos") {
        function toneladasToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToKilogramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Gramos") {
        function toneladasToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToGramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Miligramos") {
        function toneladasToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToMiligramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Microgramos") {
        function toneladasToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+12;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Stones") {
        function toneladasToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 157.473;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToStones().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Libras") {
        function toneladasToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 2204.6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToLibras().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Onzas") {
        function toneladasToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 35274;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToOnzas().toFixed(5));
    }

    /* MILIGRAMOS */

    if ( masa1 == "Miligramos" && masa2 == "Kilogramos") {
        function miligramosToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToKilogramos().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Gramos") {
        function miligramosToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToGramos().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Toneladas") {
        function miligramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Microgramos") {
        function miligramosToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Toneladas") {
        function miligramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Stones") {
        function miligramosToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 6.35e+6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToStones().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Libras") {
        function miligramosToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 453592;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToLibras().toFixed(5));
    }

    if ( masa1 == "Miligramos" && masa2 == "Onzas") {
        function miligramosToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 28350;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(miligramosToOnzas().toFixed(5));
    }

    /* MICROGRAMOS */

    if ( masa1 == "Microgramos" && masa2 == "Kilogramos") {
        function microgramosToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToKilogramos().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Gramos") {
        function microgramosToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToGramos().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Toneladas") {
        function microgramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+12;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Miligramos") {
        function microgramosToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToMiligramos().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Toneladas") {
        function microgramosToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 1e+12;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToToneladas().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Stones") {
        function microgramosToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 6.35e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToStones().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Libras") {
        function microgramosToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 4.536e+8;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToLibras().toFixed(5));
    }

    if ( masa1 == "Microgramos" && masa2 == "Onzas") {
        function microgramosToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 2.835e+7;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(microgramosToOnzas().toFixed(5));
    }

    /* TONELADAS */

    if ( masa1 == "Toneladas" && masa2 == "Kilogramos") {
        function toneladasToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToKilogramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Gramos") {
        function toneladasToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+6;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToGramos().toFixed(5));
    }

    if ( masa1 =="Toneladas" && masa2 == "Miligramos") {
        function toneladasToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+9;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToMiligramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Microgramos") {
        function toneladasToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 1e+12;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Stones") {
        function toneladasToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 157.473;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToStones().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Libras") {
        function toneladasToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 2204.62;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToLibras().toFixed(5));
    }

    if ( masa1 == "Toneladas" && masa2 == "Onzas") {
        function toneladasToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 35274;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(toneladasToOnzas().toFixed(5));
    }

    /* STONES */

    if ( masa1 == "Stones" && masa2 == "Kilogramos") {
        function stonesToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 6.35029318;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(stonesToKilogramos().toFixed(5));
    }

    if ( masa1 == "Stones" && masa2 == "Gramos") {
        function stonesToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 6350.29318;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(stonesToGramos().toFixed(5));
    }

    if ( masa1 == "Stones" && masa2 == "Toneladas") {
        function stonesToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.00635029;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(stonesToToneladas().toFixed(5));
    }

    if ( masa1 == "Stones" && masa2 == "Libras") {
        function stonesToLibras() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 14;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(stonesToLibras().toFixed(5));
    }

    if ( masa1 == "Stones" && masa2 == "Onzas") {
        function stonesToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 224;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(stonesToOnzas().toFixed(5));
    }

    /* LIBRAS */

    if ( masa1 == "Libras" && masa2 == "Kilogramos") {
        function librasToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.45359237;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToKilogramos().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Gramos") {
        function librasToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 453.59237;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToGramos().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Toneladas") {
        function librasToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.00045359237;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToToneladas().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Miligramos") {
        function librasToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 453592;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToMiligramos().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Microgramos") {
        function librasToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 4.536e+8;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 =="Toneladas") {
        function librasToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.000453592;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToToneladas().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Stones") {
        function librasToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.0714285714;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToStones().toFixed(5));
    }

    if ( masa1 == "Libras" && masa2 == "Onzas") {
        function librasToOnzas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 16;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(librasToOnzas().toFixed(5));
    }

    /* ONZAS */

    if ( masa1 == "Onzas" && masa2 == "Kilogramos") {
        function onzasToKilogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.0283495231;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToKilogramos().toFixed(5));
        }

    if ( masa1 == "Onzas" && masa2 == "Gramos") {
        function onzasToGramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 28.3495231;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToGramos().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Toneladas") {
        function onzasToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 35273.9619;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToToneladas().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Miligramos") {
        function onzasToMiligramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 28349.5231;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToMiligramos().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Microgramos") {
        function onzasToMicrogramos() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 2.835e+7;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToMicrogramos().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Toneladas") {
        function onzasToToneladas() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) / 35273.9619;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToToneladas().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Stones") {
        function onzasToStones() {
            let resultado = parseFloat(document.getElementById('numeromasa').value) * 0.0044642857;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToStones().toFixed(5));
    }

    if ( masa1 == "Onzas" && masa2 == "Libras") {
        function onzasToLibras() {
            let resultado = (document.getElementById('numeromasa').value) / 16;
            return resultado;
        }
        document.getElementById("resultadomasa").value = parseFloat(onzasToLibras().toFixed(5));
    }
}

/* -------------------------------------------------------------------------- */
/*                                 TEMPERATURA                                */
/* -------------------------------------------------------------------------- */

function intercambiarTemperatura() {
    let valorTemperatura1 = document.getElementById("temperatura1").value;
    let valorTemperatura2 = document.getElementById("temperatura2").value;
    document.getElementById("temperatura1").value = valorTemperatura2;
    document.getElementById("temperatura2").value = valorTemperatura1;
    temperatura();
}

function temperatura() {

    while (( document.getElementById("temperatura1").value == "Elije opción") || ( document.getElementById("temperatura2").value == "Elije opción") ) {
        alert('Elige dos opciones válildas');
        return;
    }

    while ( document.getElementById("temperatura1").value == document.getElementById("temperatura2").value) {
        alert('No se puede convertir una medida a si misma');
        return;
    }
 

    let temperatura1 = document.getElementById("temperatura1").value;
    let temperatura2 = document.getElementById("temperatura2").value;

    /* CENTÍGRADOS */

    if ( temperatura1 == "Centígrados" && temperatura2 == "Fahrenheit") {
        function centigradosToFahrenheit() {
            let resultado = parseFloat(document.getElementById('numerotemperatura').value) * 1.8 + 32;
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(centigradosToFahrenheit().toFixed(5));
    }

    if ( temperatura1 == "Centígrados" && temperatura2 == "Kelvin") {
        function centigradosToKelvin() {
            let resultado = parseFloat(document.getElementById('numerotemperatura').value) + 273.15;
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(centigradosToKelvin());
    }

    /* FAHRENHEIT */

    if ( temperatura1 == "Fahrenheit" && temperatura2 == "Centígrados") {
        function fahrenheitToCentigrados() {
            let resultado = (parseFloat(document.getElementById('numerotemperatura').value) - 32) * 5 / 9;
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(fahrenheitToCentigrados().toFixed(5));
    }

    if ( temperatura1 == "Fahrenheit" && temperatura2 == "Kelvin") {
        function fahrenheitToKelvin() {
            let resultado = ( parseFloat(document.getElementById('numerotemperatura').value) + 459.67) * (5 / 9);
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(fahrenheitToKelvin().toFixed(5));
    }

    /* KELVIN */

    if ( temperatura1 == "Kelvin" && temperatura2 == "Centígrados") {
        function kelvinToCentigrados() {
            let resultado = parseFloat(document.getElementById('numerotemperatura').value) - 273.15;
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(kelvinToCentigrados().toFixed(5));
    }

    if ( temperatura1 == "Kelvin" && temperatura2 == "Fahrenheit") {
        function kelvinToFahrenheit() {
            let resultado = ( parseFloat(document.getElementById('numerotemperatura').value) - 273.15) * 9 / 5 + 32;
            return resultado;
        }
        document.getElementById("resultadotemperatura").value = parseFloat(kelvinToFahrenheit().toFixed(5));
    }
}

/* -------------------------------------------------------------------------- */
/*                                   TIEMPO                                   */
/* -------------------------------------------------------------------------- */

function intercambiarTiempo() {
    let valorTiempo1 = document.getElementById("tiempo1").value;
    let valorTiempo2 = document.getElementById("tiempo2").value;
    document.getElementById("tiempo1").value = valorTiempo2;
    document.getElementById("tiempo2").value = valorTiempo1;
    tiempo();
}

function tiempo() {

    while (( document.getElementById("tiempo1").value == "Elije opción") || ( document.getElementById("tiempo2").value == "Elije opción") ) {
        alert('Elige dos opciones válildas');
        return;
    }

    while ( document.getElementById("tiempo1").value == document.getElementById("tiempo2").value) {
        alert('No se puede convertir una medida a si misma');
        return;
    }

    let tiempo1 = document.getElementById("tiempo1").value;
    let tiempo2 = document.getElementById("tiempo2").value;

    /* SEGUNDOS */

    if ( tiempo1 == "Segundos" && tiempo2 == "Minutos") {
        function segundosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 60;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Horas") {
        function segundosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Dias") {
        function segundosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 86400;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToDias().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Semanas") {
        function segundosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 604800;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Meses") {
        function segundosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 2592000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Años") {
        function segundosToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31536000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToAnios().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Decadas") {
        function segundosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 315360000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Décadas") {
        function segundosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 315360000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Siglos") {
        function segundosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31536000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Milenios") {
        function segundosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3153600000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Nanosegundos") {
        function segundosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Microsegundos") {
        function segundosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Milisegundos") {
        function segundosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Centésimas") {
        function segundosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Segundos" && tiempo2 == "Décimas") {
        function segundosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(segundosToDecimas().toFixed(5));
    }

    /* MINUTOS */

    if ( tiempo1 == "Minutos" && tiempo2 == "Segundos") {
        function minutosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 60;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Horas") {
        function minutosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 60;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Días") {
        function minutosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 1440;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToDias().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Semanas") {
        function minutosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 10080;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Meses") {
        function minutosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 43200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Años") {
        function minutosToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 525600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToAnios().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Décadas") {
        function minutosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 5259200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Siglos") {
        function minutosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 525600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Milenios") {
        function minutosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 52560000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Nanosegundos") {
        function minutosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 6e+10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Microsegundos") {
        function minutosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 6e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Milisegundos") {
        function minutosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 60000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Centésimas") {
        function minutosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 6000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Minutos" && tiempo2 == "Décimas") {
        function minutosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(minutosToDecimas().toFixed(5));
    }

    /* HORAS */

    if ( tiempo1 == "Horas" && tiempo2 == "Segundos") {
        function horasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Minutos") {
        function horasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 60;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Días") {
        function horasToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 24;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToDias().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Semanas") {
        function horasToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 168;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Meses") {
        function horasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 730.001;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Años") {
        function horasToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 8760;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToAnios().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Décadas") {
        function horasToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 876000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Siglos") {
        function horasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 87600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Milenios") {
        function horasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 87600000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Nanosegundos") {
        function horasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.6e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Microsegundos") {
        function horasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.6e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Milisegundos") {
        function horasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.6e+6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Centésimas") {
        function horasToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Horas" && tiempo2 == "Décimas") {
        function horasToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 360000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(horasToDecimas().toFixed(5));
    }

    /* DÍAS */

    if ( tiempo1 == "Días" && tiempo2 == "Segundos") {
        function diasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 86400;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Minutos") {
        function diasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1440;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Horas") {
        function diasToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 24;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToHoras().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Semanas") {
        function diasToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Meses") {
        function diasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 30.417;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Años") {
        function diasToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 365;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToAnios().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Décadas") {
        function diasToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3650;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Siglos") {
        function diasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Milenios") {
        function diasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Nanosegundos") {
        function diasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+13;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Microsegundos") {
        function diasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Milisegundos") {
        function diasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Centésimas") {
        function diasToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 864000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Días" && tiempo2 == "Décimas") {
        function diasToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8640000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(diasToDecimas().toFixed(5));
    }

    /* SEMANAS */

    if ( tiempo1 == "Semanas" && tiempo2 == "Segundos") {
        function semanasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 604800;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Minutos") {
        function semanasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10080;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Horas") {
        function semanasToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 168;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToHoras().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Días") {
        function semanasToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToDias().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Meses") {
        function semanasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 4.348;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Años") {
        function semanasToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 52;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToAnios().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Decadas") {
        function semanasToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Siglos") {
        function semanasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Milenios") {
        function semanasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Nanosegundos") {
        function semanasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+13;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Microsegundos") {
        function semanasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Milisegundos") {
        function semanasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8.64e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Centésimas") {
        function semanasToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 864000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Semanas" && tiempo2 == "Decimas") {
        function semanasToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 86400;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(semanasToDecimas().toFixed(5));
    }

    /* MESES */

    if ( tiempo1 == "Meses" && tiempo2 == "Segundos") {
        function mesesToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2628000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Minutos") {
        function mesesToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 43200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Horas") {
        function mesesToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 720;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToHoras().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Días") {
        function mesesToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 30;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToDias().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Semanas") {
        function mesesToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 4.348;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Años") {
        function mesesToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToAnios().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Décadas") {
        function mesesToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Siglos") {
        function mesesToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Milenios") {
        function mesesToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Nanosegundos") {
        function mesesToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2.628e+13;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Microsegundos") {
        function mesesToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2.628e+10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Milisegundos") {
        function mesesToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2.628e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Centésimas") {
        function mesesToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2.628e+4;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Meses" && tiempo2 == "Milésimas") {
        function mesesToMilesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 2.628e+3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mesesToMilesimas().toFixed(5));
    }

    /* AÑOS */

    if ( tiempo1 == "Años" && tiempo2 == "Segundos") {
        function aniosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Minutos") {
        function aniosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 525600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Horas") {
        function aniosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 8760;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Días") {
        function aniosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 365;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToDias().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Semanas") {
        function aniosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 52;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Meses") {
        function aniosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Décadas") {
        function aniosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Siglos") {
        function aniosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 0.01;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Milenios") {
        function aniosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 0.001;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Nanosegundos") {
        function aniosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Microsegundos") {
        function aniosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Milisegundos") {
        function aniosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Centésimas") {
        function aniosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+5;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Años" && tiempo2 == "Décimas") {
        function aniosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+4;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(aniosToDecimas().toFixed(5));
    }

    /* DÉCADAS */

    if ( tiempo1 == "Décadas" && tiempo2 == "Segundos") {
        function decadasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+8;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Minutos") {
        function decadasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+5;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Horas") {
        function decadasToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+4;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToHoras().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Días") {
        function decadasToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3650;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToDias().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Semanas") {
        function decadasToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 520;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Meses") {
        function decadasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 120;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Años") {
        function decadasToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToAnios().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Siglos") {
        function decadasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 0.1;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Milenios") {
        function decadasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 0.01;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Nanosegundos") {
        function decadasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Microsegundos") {
        function decadasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Milisegundos") {
        function decadasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Centésimas") {
        function decadasToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Décadas" && tiempo2 == "Décimas") {
        function decadasToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decadasToDecimas().toFixed(5));
    }

    /* SIGLOS */

    if ( tiempo1 == "Siglos" && tiempo2 == "Segundos") {
        function siglosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Minutos") {
        function siglosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Horas") {
        function siglosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+7;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Días") {
        function siglosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+5;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToDias().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Semanas") {
        function siglosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 5200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Meses") {
        function siglosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Años") {
        function siglosToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToAnios().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Decadas") {
        function siglosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 =="Milenios") {
        function siglosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 0.1;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 =="Nanosegundos") {
        function siglosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 =="Microsegundos") {
        function siglosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 =="Milisegundos") {
        function siglosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Centésimas") {
        function siglosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Siglos" && tiempo2 == "Décimas") {
        function siglosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(siglosToDecimas().toFixed(5));
    }

    /* MILENIOS */

    if ( tiempo1 == "Milenios" && tiempo2 == "Segundos") {
        function mileniosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Minutos") {
        function mileniosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+12;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Horas") {
        function mileniosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Días") {
        function mileniosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToDias().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Semanas") {
        function mileniosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Meses") {
        function mileniosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Años") {
        function mileniosToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToAnios().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Décadas") {
        function mileniosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Siglos") {
        function mileniosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Nanosegundos") {
        function mileniosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Microsegundos") {
        function mileniosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Milisegundos") {
        function mileniosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToMilisegundos().toFixed(5));
    }

    if  ( tiempo1 == "Milenios" && tiempo2 == "Centésimas") {
        function mileniosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Milenios" && tiempo2 == "Décimas") {
        function mileniosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 3.154e+15;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(mileniosToDecimas().toFixed(5));
    }

    /* NANOSEGUNDOS */

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Segundos") {
        function nanosegundosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Minutos") {
        function nanosegundosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Horas") {
        function nanosegundosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Días") {
        function nanosegundosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToDias().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Semanas") {
        function nanosegundosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Meses") {
        function nanosegundosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Años") {
        function nanosegundosToAnios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToAnios().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Décadas") {
        function nanosegundosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Siglos") {
        function nanosegundosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Milenios") {
        function nanosegundosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Microsegundos") {
        function nanosegundosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Milisegundos") {
        function nanosegundosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Centésimas") {
        function nanosegundosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Nanosegundos" && tiempo2 == "Décimas") {
        function nanosegundosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-9;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(nanosegundosToDecimas().toFixed(5));
    }

    /* MICROSEGUNDOS */

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Segundos") {
        function microsegundosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Minutos") {
        function microsegundosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Horas") {
        function microsegundosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Días") {
        function microsegundosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToDias().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Semanas") {
        function microsegundosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Meses") {
        function microsegundosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Años") {
        function microsegundosToAnos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToAnos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Décadas") {
        function microsegundosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Siglos") {
        function microsegundosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Milenios") {
        function microsegundosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Nanosegundos") {
        function microsegundosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Milisegundos") {
        function microsegundosToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Centésimas") {
        function microsegundosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Microsegundos" && tiempo2 == "Décimas") {
        function microsegundosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e-3;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(microsegundosToDecimas().toFixed(5));
    }

    /* MILISEGUNDOS */

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Segundos") {
        function milisegundosToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 1000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Minutos") {
        function milisegundosToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 60000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Horas") {
        function milisegundosToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 3600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToHoras().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Días") {
        function milisegundosToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 86400000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToDias().toFixed(5));
    }
   
    if ( tiempo1 == "Milisegundos" && tiempo2 == "Semanas") {
        function milisegundosToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 604800000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Meses") {
        function milisegundosToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 2628000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToMeses().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Años") {
        function milisegundosToAnos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToAnos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Décadas") {
        function milisegundosToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Siglos") {
        function milisegundosToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Milenios") {
        function milisegundosToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Nanosegundos") {
        function milisegundosToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1e6;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Microsegundos") {
        function milisegundosToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Centésimas") {
        function milisegundosToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToCentesimas().toFixed(5));
    }

    if ( tiempo1 == "Milisegundos" && tiempo2 == "Décimas") {
        function milisegundosToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(milisegundosToDecimas().toFixed(5));
    }

    /* CENTÉSIMAS */

    if ( tiempo1 == "Centésimas" && tiempo2 == "Segundos") {
        function centesimasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Minutos") {
        function centesimasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 6000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Horas") {
        function centesimasToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 360000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToHoras().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Días") {
        function centesimasToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 8640000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToDias().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Semanas") {
        function centesimasToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 60480000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Meses") {
        function centesimasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 2419200000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Años") {
        function centesimasToAnos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToAnos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Décadas") {
        function centesimasToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Siglos") {
        function centesimasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Milenios") {
        function centesimasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Nanosegundos") {
        function centesimasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Microsegundos") {
        function centesimasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Milisegundos") {
        function centesimasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Centésimas" && tiempo2 == "Décimas") {
        function centesimasToDecimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(centesimasToDecimas().toFixed(5));
    }

    /* DÉCIMAS */

    if ( tiempo1 == "Décimas" && tiempo2 == "Segundos") {
        function decimasToSegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToSegundos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Minutos") {
        function decimasToMinutos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToMinutos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Horas") {
        function decimasToHoras() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 36000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToHoras().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Días") {
        function decimasToDias() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 864000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToDias().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Semanas") {
        function decimasToSemanas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 6048000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToSemanas().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Meses") {
        function decimasToMeses() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 2419200;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToMeses().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Años") {
        function decimasToAnos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToAnos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Décadas") {
        function decimasToDecadas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 315576000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToDecadas().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Siglos") {
        function decimasToSiglos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 31557600000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToSiglos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Milenios") {
        function decimasToMilenios() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) / 315576000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToMilenios().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Nanosegundos") {
        function decimasToNanosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToNanosegundos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Microsegundos") {
        function decimasToMicrosegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 1000000;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToMicrosegundos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Milisegundos") {
        function decimasToMilisegundos() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 100;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToMilisegundos().toFixed(5));
    }

    if ( tiempo1 == "Décimas" && tiempo2 == "Centésimas" ) {
        function decimasToCentesimas() {
            let resultado = parseFloat(document.getElementById('numerotiempo').value) * 10;
            return resultado;
        }
        document.getElementById("resultadotiempo").value = parseFloat(decimasToCentesimas().toFixed(5));
    }
}

/* -------------------------------------------------------------------------- */
/*                                  VELOCIDAD                                 */
/* -------------------------------------------------------------------------- */

function intercambiarVelocidad() {
    let valorVelocidad1 = document.getElementById("velocidad1").value;
    let valorVelocidad2 = document.getElementById("velocidad2").value;
    document.getElementById("velocidad1").value = valorVelocidad2;
    document.getElementById("velocidad2").value = valorVelocidad1;
    velocidad();
}

function velocidad() {

    while (( document.getElementById("velocidad1").value == "Elije opción") || ( document.getElementById("velocidad2").value == "Elije opción") ) {
        alert('Elige dos opciones válildas');
        return;
    }

    while ( document.getElementById("velocidad1").value == document.getElementById("velocidad2").value) {
        alert('No se puede convertir una medida a si misma');
        return;
    }
 
    let velocidad1 = document.getElementById("velocidad1").value;
    let velocidad2 = document.getElementById("velocidad2").value;

    /* METROS POR SEGUNDO */

    if ( velocidad1 == "MetrosPorSegundo" && velocidad2 == "KilometrosPorHora") {
        function metrosPorSegundoToKilometrosPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 3.6;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(metrosPorSegundoToKilometrosPorHora().toFixed(5));
    }

    if ( velocidad1 == "MetrosPorSegundo" && velocidad2 == "MillasPorHora") {
        function metrosPorSegundoToMillasPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 2.237;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(metrosPorSegundoToMillasPorHora().toFixed(5));
    }

    if ( velocidad1 == "MetrosPorSegundo" && velocidad2 == "PiesPorSegundo") {
        function metrosPorSegundoToPiesPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 3.28084;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(metrosPorSegundoToPiesPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "MetrosPorSegundo" && velocidad2 == "Nudos") {
        function metrosPorSegundoToNudos() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.94384;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(metrosPorSegundoToNudos().toFixed(5));
    }

    /* KILOMETROS POR HORA */

    if ( velocidad1 == "KilometrosPorHora" && velocidad2 == "MetrosPorSegundo") {
        function kilometrosPorHoraToMetrosPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 3.6;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(kilometrosPorHoraToMetrosPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "KilometrosPorHora" && velocidad2 == "MillasPorHora") {
        function kilometrosPorHoraToMillasPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 1.609;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(kilometrosPorHoraToMillasPorHora().toFixed(5));
    }

    if ( velocidad1 == "KilometrosPorHora" && velocidad2 == "PiesPorSegundo") {
        function kilometrosPorHoraToPiesPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 0.9113;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(kilometrosPorHoraToPiesPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "KilometrosPorHora" && velocidad2 == "Nudos") {
        function kilometrosPorHoraToNudos() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 0.53995;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(kilometrosPorHoraToNudos().toFixed(5));
    }

    /* MILLAS POR HORA */

    if ( velocidad1 == "MillasPorHora" && velocidad2 == "MetrosPorSegundo") {
        function millasPorHoraToMetrosPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 2.237;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(millasPorHoraToMetrosPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "MillasPorHora" && velocidad2 == "KilometrosPorHora") {
        function millasPorHoraToKilometrosPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.609;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(millasPorHoraToKilometrosPorHora().toFixed(5));
    }

    if ( velocidad1 == "MillasPorHora" && velocidad2 == "PiesPorSegundo") {
        function millasPorHoraToPiesPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.466667;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(millasPorHoraToPiesPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "MillasPorHora" && velocidad2 == "Nudos") {
        function millasPorHoraToNudos() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 0.868976;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(millasPorHoraToNudos().toFixed(5));
    }

    /* PIES POR SEGUNDO */

    if ( velocidad1 == "PiesPorSegundo" && velocidad2 == "MetrosPorSegundo") {
        function piesPorSegundoToMetrosPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 3.28084;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(piesPorSegundoToMetrosPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "PiesPorSegundo" && velocidad2 == "KilometrosPorHora") {
        function piesPorSegundoToKilometrosPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.09728;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(piesPorSegundoToKilometrosPorHora().toFixed(5));
    }

    if ( velocidad1 == "PiesPorSegundo" && velocidad2 == "MillasPorHora") {
        function piesPorSegundoToMillasPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 1.466667;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(piesPorSegundoToMillasPorHora().toFixed(5));
    }

    if ( velocidad1 == "PiesPorSegundo" && velocidad2 == "Nudos") {
        function piesPorSegundoToNudos() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 0.592484;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(piesPorSegundoToNudos().toFixed(5));
    }

    /* NUDOS */

    if ( velocidad1 == "Nudos" && velocidad2 == "MetrosPorSegundo") {
        function nudosToMetrosPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) / 1.944;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(nudosToMetrosPorSegundo().toFixed(5));
    }

    if ( velocidad1 == "Nudos" && velocidad2 == "KilometrosPorHora") {
        function nudosToKilometrosPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.852;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(nudosToKilometrosPorHora().toFixed(5));
    }

    if ( velocidad1 == "Nudos" && velocidad2 == "MillasPorHora") {
        function nudosToMillasPorHora() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.15078;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(nudosToMillasPorHora().toFixed(5));
    }

    if ( velocidad1 == "Nudos" && velocidad2 == "PiesPorSegundo") {
        function nudosToPiesPorSegundo() {
            let resultado = parseFloat(document.getElementById('numerovelocidad').value) * 1.68780;
            return resultado;
        }
        document.getElementById("resultadovelocidad").value = parseFloat(nudosToPiesPorSegundo().toFixed(5));
    }
}