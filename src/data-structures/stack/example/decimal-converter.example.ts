import StackArray from '../stack-array';

function decimalConverter(decimal: number, base: number): string {
  const stack = new StackArray();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let contoller = decimal;
  let binaryToString = '';

  if (base < 2 || base > 36) return '';

  while (contoller > 0) {
    stack.push(Math.floor(contoller % base).toString());
    contoller = Math.floor(contoller / base);
  }

  while (!stack.isEmpty()) {
    let number = stack.pop();
    if (number) binaryToString += digits[parseInt(number)];
  }

  return binaryToString;
}

const result = decimalConverter(100345, 16);
console.log(result); // 187F9
