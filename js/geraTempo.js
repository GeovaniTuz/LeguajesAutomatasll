
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
