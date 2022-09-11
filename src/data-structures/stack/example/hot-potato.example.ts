import Queue from '../../queue/queue';

function hasPotato(elementList: any[], num: number) {
  const queue: Queue = new Queue();
  const elimitedList: any[] = [];

  for (let c = 0; c < elementList.length; c++) {
    queue.enqueue(elementList[c]);
  }

  while (queue.seze() > 1) {
    for (let c = 0; c < num; c++) {
      const dequeue = queue.dequeue();
      if (typeof dequeue === 'string') queue.enqueue(dequeue);
    }
    elimitedList.push(queue.dequeue());
  }

  return {
    elementList: elimitedList,
    winner: queue.dequeue(),
  };
}

const names = ['Jose', 'Jhon', 'Anna', 'Isa'];
const result = hasPotato(names, 1);

result.elementList.forEach((name) => {
  console.log(`${name} was eliminated!`);
});
console.log(`${result.winner} was winner`);
