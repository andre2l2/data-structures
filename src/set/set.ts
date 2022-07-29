/*
 * Os Conjuntos ou Set é um tipo de estrutura de dados para salvar dados que
 * não podem se repetir
 */

class SetElements {
  private itens: any = {};

  constructor() {}

  has(element: any): boolean {
    return Object.prototype.hasOwnProperty.call(this.itens, element);
  }

  add(element: any): boolean {
    if (!this.has(element)) {
      this.itens[element] = element;
      return true;
    }
    return false;
  }

  toString(): string {
    return JSON.stringify(this.itens);
  }

  delete(element: any): boolean {
    if (this.has(element)) {
      delete this.itens[element];
      return true;
    }
    return false;
  }

  clear(): void {
    this.itens = {};
  }

  size(): number {
    return Object.keys(this.itens).length;
  }

  values(): Array<any> {
    return Object.values(this.itens);
  }
}
