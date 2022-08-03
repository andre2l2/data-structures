/*
 * Os Conjuntos ou Set é um tipo de estrutura de dados para salvar dados que
 * não podem se repetir
 */

export class SetElements {
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

  union(otherSet: SetElements): Array<any> {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return Array.from(unionSet);
  }

  intersection(otherSet: SetElements): Array<any> {
    const intersectionSet = new Set();
    const values = this.values();
    const orderValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = orderValues;

    if (orderValues.length - values.length > 0) {
      biggerSet = orderValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) intersectionSet.add(value);
    });

    return Array.from(intersectionSet);
  }

  deiference(otherSet: SetElements): Array<any> {
    const deiferenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) deiferenceSet.add(value);
    });

    return Array.from(deiferenceSet);
  }

  isSubSetOf(otherSet: SetElements): boolean {
    if (this.size() > otherSet.size()) return false;
    let isSubSet = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubSet = false;
        return false;
      }
      return true;
    });
    return isSubSet;
  }
}
