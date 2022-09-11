import Deque from '../daque';

function palindromeChecker(aString: string): boolean {
  if (!aString) return false;

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar: any, lastChar: any;

  for (let c = 0; c < lowerString.length; c++) {
    deque.addBack(lowerString.charAt(c));
  }

  while (deque.size > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

const resp = palindromeChecker('ame a ema');
console.log(resp);
