import { HashTable } from './hash-table/hash-table';
import { defaultToString } from './util';

const hashTable = new HashTable(defaultToString);
hashTable.put('jack', 'jack@gmail.com');
hashTable.put('jack', 'jack@hotmail.com');
hashTable.put('anna', 'anna@hotmail.com');

console.log(hashTable.toString());
