/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Triplos;

/**
 *
 * @author Geovani Alberto
 */
public class Pila {
  /*
   * Codigo: https://github.com/Xabadu/js-data-structures.git
   */

  private final int n;
  private int tope;
  private final Object pila[];

  public Pila(int n) {
    this.n = n;
    tope = 0;
    pila = new Object[n];
  }

  public boolean estaVacia() {
    return tope == 0;

  }

  public boolean estaLlena() {
    return tope == n;
  }

  public boolean apilar(Object dato) {
    if (estaLlena()) {
      return false;
    }
    pila[tope] = dato;
    tope++;
    return true;
  }

  public Object desapilar() {
    if (estaVacia()) {
      return null;
    }
    tope--;
    return pila[tope];
  }

  public Object elementoTope() {
    return pila[tope - 1];
  }
}
/*
 * 
 * class Stack { constructor() { this.stack = []; }
 * 
 * push(element) { this.stack.push(element); return this.stack; }
 * 
 * pop() { return this.stack.pop(); }
 * 
 * peek() { return this.stack[this.stack.length - 1]; }
 * 
 * size() { return this.stack.length; }
 * 
 * print() { console.log(this.stack); } }
 */