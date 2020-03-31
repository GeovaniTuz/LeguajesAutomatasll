/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Triplos;

/**
 *
 * @author Geovani Alberto Tuz Poot
 */

import java.util.ArrayList;

public class Evaluador {

    static ArrayList<String> operaciones = new ArrayList();

    private static String convertir(final String infija) {
        String postfija = "";
        final Pila pila = new Pila(100);

        for (int i = 0; i < infija.length(); i++) {
            final char letra = infija.charAt(i);

            if (esOperador(letra)) {

                if (pila.estaVacia()) {
                    pila.apilar(letra);

                } else {

                    final int pe = prioridadEnExpresion(letra);
                    final int pp = prioridadEnPila((char) pila.elementoTope());

                    if (pe > pp) {
                        pila.apilar(letra);

                    } else if (letra == ')') {

                        String aux = pila.desapilar().toString();
                        while (!aux.equals("(")) {
                            postfija += aux;
                            aux = pila.desapilar().toString();
                        }

                    } else {
                        postfija += pila.desapilar();
                        pila.apilar(letra);
                    }
                }

            } else {
                postfija += letra;
            }
        }
        while (!pila.estaVacia()) {
            postfija += pila.desapilar();
        }
        return postfija;
    }

    private static int prioridadEnExpresion(final char operador) {

        if (operador == '*' || operador == '/') {
            return 2;
        }
        if (operador == '+' || operador == '-') {
            return 1;
        }
        if (operador == '(') {
            return 5;
        }
        return 0;
    }

    private static int prioridadEnPila(final char operador) {

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

    private static boolean esOperador(final char letra) {
        if (letra == '*' || letra == '/' || letra == '+' || letra == '-' || letra == '(' || letra == ')') {
            return true;
        }

        return false;
    }

    private static String temporal(final char letra, final String num1, final String num2, final int i) {
        if (letra == '*') {
            Evaluador.operaciones.add("t" + i + " = " + num1  + " * " + num2);
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

        return "";
    }

    public ArrayList<String> temporales(final String infija) {

        final Pila pilaTemporales = new Pila(100);
        int indiceTemporal = 0;
        final String postfija = convertir(infija);
        for (int i = 0; i < postfija.length(); i++) {
            final char letra = postfija.charAt(i);
            if (!esOperador(letra)) {

                final String n = Character.toString(letra);
                pilaTemporales.apilar(n);

            } else {

                final String n2 = pilaTemporales.desapilar().toString();
                final String n1 = pilaTemporales.desapilar().toString();
                final String n3 = Evaluador.temporal(letra, n1, n2, indiceTemporal);
                pilaTemporales.apilar(n3);
                indiceTemporal++;
            }

        }
        Evaluador.operaciones.add(" x= " + pilaTemporales.elementoTope());
        return Evaluador.operaciones;

    }
}
