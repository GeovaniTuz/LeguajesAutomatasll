// son todo lo mismo, jajaja pero ya ni pex, solo hay que mejor el que les toco ya que no se pudo hacer de forma dinamica
// se tiene que saber muy bien los arboles y los grafos. lo mejor es usar estaticamente. para no reprobar :v

// funcion de geo que se sube.inicio
function Ecu0() {

    let ecuacion = document.getElementById('ecu0').value;
    if (ecuacion != null) {
        let expres = /\d{1,}\s{0,}['+']\s{0,1}\d{1,}/gi;
        let suma = ecuacion.match(expres);
        let i = 0;
        let t = 't';
        let result = t + i + ' = ' + suma;
        let otro = ecuacion.replace(expres, t + i);
        i++;
        let result2 = t + i + ' = ' + otro;
        alert(`Operacion: ${ecuacion} \n \n  ${result} \n ${result2}`)
    };
}
//fin


// funcion de sergio que se sube.
function Ecu1() {

    let ecuacion = document.getElementById('ecu1').value;
    if (ecuacion != null) {
        let expres = /\d{1,}\s{0,}['']\s{0,1}\d{1,}/gi;
        let suma = ecuacion.match(expres);
        let i = 0;
        let t = 't';
        let result = t + i + ' = ' + suma;
        let otro = ecuacion.replace(expres, t + i);
        i++;
        let result2 = t + i + ' = ' + otro;
        alert(`Operacion: ${ecuacion} \n \n  ${result} \n ${result2}`)
    }
    
}
//fin

// funcion de jesus que se sube.
function Ecu2() {

    let ecuacion = document.getElementById('ecu2').value;
    if (ecuacion != null) {
        let expres = /\d{1,}\s{0,}['+']\s{0,1}\d{1,}/gi;
        let suma = ecuacion.match(expres);
        let i = 0;
        let t = 't';
        let result = t + i + ' = ' + suma;
        let otro = ecuacion.replace(expres, t + i);
        i++;
        let result2 = t + i + ' = ' + otro;
        alert(`Operacion: ${ecuacion} \n \n  ${result} \n ${result2}`)
    }
    
}
