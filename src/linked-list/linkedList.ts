class LinkedList {
  private count: number;
  private head: any;
  private equalFn: any;

  constructor() {
    this.count = 0;
    this.head = undefined;
    this.equalFn = undefined;
  }
}

export default LinkedList;
