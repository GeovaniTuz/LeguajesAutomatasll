function temporal() {
    /*
    puntos importantes:

      1.-no se recomienda usar var en su lugar usar let
      2.- prompt se usa para pedir datos.
      3.-` Numero ${dato} de 9` --> Numero 9 de 9
    */

    //se pide datos en pantalla html
    let datos = prompt("Introducir dato para Evaluar")

    // se compreva los datos introducidos.
    console.log(datos);

    let suma = new RegExp('[0-9"+"0-9]', 'g');

    let nul = datos.match(suma);//agarra todo lo que encuentre con suma

    let lineo =  "<br>";// para salto de linea

    //se inicia el for para generar los temporales
    for (let i = 0; i<5; i++){// el valor 5 se cambiara segun la posicion a la que pertenesca
        console.log(`t${i} = ${nul}`);// genera datos para que se muestre en consola
        let tempos = `t${i} = ${nul}`;// aqui se alamacena el mensage necesario ``(comillas graves)
        document.write(lineo, tempos);// lo que contenga linde o tempos lo manda a otra ventana con los resultados.

    }
    
    


}