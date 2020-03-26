function main() {
    var infija = document.getElementById('ecu0').value;
    console.log(infija)
    var infijaPura = ""
    const codigo = new Evaluador()
    for (var i = 0; i < infija.length; i++) {
        if (infija.charAt(i) != ' ') {
            infijaPura += infija.charAt(i)
            //console.log(infijaPura)
            var ar = [infijaPura]
            console.log(ar)
            var ess = codigo.tempolares()
            
            
          
            
        }
       
        document.getElementById("resul").value = ar;
    }

    
    

    //aqui se debe de pasar los argumentos de array list
    // lo que hace el for es ir elimando las partes que ya evaluo
    // no logro usar elemento .size solo con eso que funcione ya esta listo
    /*
        var a = []

    a =  codigo.tempolares(infijaPura)
    console.log(a)
    for (var i = 0; i < a.size(); i++) {
      console.log(a)

    }
     */



};

function conver (infija){
    var posfija = ""
    const pilas = new Pila(100)
    for (var i = 0; i < infija; i++) {
        var letra = infija(i)
        if (esOperador(letra)) {
            if (pilas.estaVacia()) {
                pilas.apilar(letra)
            } else {
                var pe = prioridadExpresion(letra)
                var pp = prioridadPila(pilas.elemetoTope)
                if (pe > pp) {
                    pilas.apilar(letra)
                } else if (letra == ')') {
                    var aux = pilas.desapilar().toString()
                    while (!aux("(")) {
                        posfija += aux
                        aux = pilas.desapilar()
                    }
                } else {
                    postfija += pilas.desapilar()
                    pilas.apilar(letra)
                }
            }
        } else {
            posfija += letra
        }
    }

}

class Pila {

    constructor() {
        this.n = this.n
        this.pila = this.pila
        this.tope = this.tope
    }

    Pila(n) {
        this.n = n
        this.tope = 0
        this.pila = new Object[this.n]
    }
    estaVacia() {
        return this.tope == 0
    }

    estaLlena() {
        return this.tope == this.n
    }
    apilar(dato) {
        if (this.estaLlena()) {
            return false
        }
        this.pila[this.tope] = dato
        this.tope++
        return true
    }
    desapilar() {
        if (this.estaVacia()) {
            return null
        }
        this.tope--
        return this.pila[this.tope]
    }
    elemetoTope() {
        return this.pila[this.tope - 1]
    }
    size() {
        return this.size
    }


};

class Evaluador {
    constructor(infija) {
        this.convertir = infija
        this.tempolares = []

    }
    convertir() {
        var posfija = ""
        const pilas = new Pila(100)
        for (var i = 0; i < infija; i++) {
            var letra = infija(i)
            if (esOperador(letra)) {
                if (pilas.estaVacia()) {
                    pilas.apilar(letra)
                } else {
                    var pe = prioridadExpresion(letra)
                    var pp = prioridadPila(pilas.elemetoTope)
                    if (pe > pp) {
                        pilas.apilar(letra)
                    } else if (letra == ')') {
                        var aux = pilas.desapilar().toString()
                        while (!aux("(")) {
                            posfija += aux
                            aux = pilas.desapilar()
                        }
                    } else {
                        postfija += pilas.desapilar()
                        pilas.apilar(letra)
                    }
                }
            } else {
                posfija += letra
            }
        }
    }

    prioridadExpresion(operador) {
        if (operador == '^') {
            return 4
        }
        if (operador == '*' || operador == '/') {
            return 2
        }
        if (operador == '+' || operador == '-') {
            return 1
        }
        if (operador == '(') {
            return 5
        }
        return 0
    }

    prioridadPila(operador) {
        if (operador == '^') {
            return 3;
        }
        if (operador == '*' || operador == '/') {
            return 2;
        }
        if (operador == '+' || operador == '-') {
            return 1;
        }
        if (operador == '(') {
            return 0;
        }
        return 0;
    }

    esOperador(letra) {
        if (letra == '^' || letra == '*' || letra == '/' || letra == '+'
            || letra == '-' || letra == '(' || letra == ')') {
            return true;
        }

        return false;

    }
    temporal(letra, num1, num2, i) {
        if (letra == '*') {
            Evaluador.operaciones.add("t" + i + " = " + num1 + " * " + num2);
            return "t" + i;
        }
        if (letra == '/') {
            Evaluador.operaciones.add("t" + i + " = " + num1 + " / " + num2);
            return "t" + i;
        }
        if (letra == '+') {
            Evaluador.operaciones.add("t" + i + " = " + num1 + " + " + num2);
            return "t" + i;
        }
        if (letra == '-') {
            Evaluador.operaciones.add("t" + i + " = " + num1 + " - " + num2);
            return "t" + i;
        }
        if (letra == '^') {
            Evaluador.operaciones.add("t" + i + " = " + num1 + " ^ " + num2);
            return "t" + i;
        }
        return "";
    }

    tempolares(infija) {
        const pilatemporal = new Pila(100)
        var indiceTemporal = 0
        //const postfija =  new this.convertir(infija)
        //var postfija = new convertir(infija)
        var postfija = this.convertir(infija)
        for (var i = 0; i < postfija; i++) {
            var letra = postfija.i
            if (!esOperador(letra)) {
                var n = CharacterData.toString(n)
                pilatemporal.apilar
            } else {
                console.log("Algo salio mal")
            }

        }

    }

}



