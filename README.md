# Estrutura de dados e algoritimos

## Temas

- [Filas](#filas)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Deque](#deque)
- [Listas Ligadas](#listas-ligadas)
  - [Lista Ligada Simples](#lista-ligada-simples)
  - [Lista Duplamente ligada](#lista-duplamente-ligada)
- [Conjuntos](#conjuntos)
  - [O que é um conjunto?](#o-que-é-um-conjunto)
  - [União](#união-aub)
  - [Intersecção](#intersecção-anb)
  - [Diferença](#diferença-a-b)
  - [Subconjunto](#subconjunto-acb)
- [Mapas/Dicionarios](#mapasdicionarios)

## Filas

### Stack

Uma stack (pilha) usa o principio **LIFO** (last in first out) ou sejá o ultimo a entrar será o ultimo a sair. Um bom exemplo é uma pilha de livros, onde só podemos retirar o ultimo livro que foi colocado.

### Queue

O Queue (fila) é semelhante a Stack mas com algumas particulariedades, pois no Queue usamos o principio **FIFO** (first in first out) ou seja, o primeiro a entrar é o primeiro a sair. Um exemplo bacana seria a propira fila de um banco, onde o primeiro a chegar é atendido e logo depois sai da fila.

### Deque

O Deque é o pricipio de **LIFO** e **FIFO** tudo junto e misturado. Onde pode se remover tanto o primerio da fila quanto o ultimo da fila. Com Deque podemos fazer também uma fila _circular_.

## Listas Ligadas

### Lista Ligada Simples

Uma lista ligada tipo de estutura de arrays dinamico, o nome _ligada_ quer dizer que o ultimo elemento da lista aponta para proximo como no exemplo abaixo.
Se você reparar vai ver que na imagem tem um head, pois é onde guardamos a posição do primeiro elemento, para assim possamos comecar a fazer uma iteração.

![linked_list](./docs/img/linked_list.png)

## Conjuntos

### O que é um conjunto?

Os Conjuntos ou Set é um tipo de estrutura de dados para salvar dados que
não podem se repetir, bem semelahnte ao proprio Set nativo do Javascript.

### União (**AuB**)

Retorna um novo conjunto de dados que pertença aos dois conjuntos, como no exemplo abaixo onde AuB.

<img src="https://i.ytimg.com/vi/-d_Lb0UfZfE/maxresdefault.jpg" width="400px"/>

### Intersecção (**AnB**)

Retorna a um novo conjunto com os elementos de ambos os elementos, como no exemplo abaixo AnB.

<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_PPcv9MRb26c%2FTUinpWfgBYI%2FAAAAAAAAAL4%2FIuZlSd1mgTk%2Fs1600%2Fimage042.gif&f=1&nofb=1" width="400px"/>

### Diferença (**A-B**)

Retorna um novo conjunto com todos os elementos apenas do primeiro conjunto.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.static.brasilescola.uol.com.br%2Fbe%2F2020%2F02%2Foperacoes-representacao-grafica-diferenca.jpg&f=1&nofb=1" width="400px"/>

### Subconjunto (**AcB**)

Confirma de um conjunto é um subconjunto de outro

<img src="https://static.todamateria.com.br/upload/su/bc/subconjunto.jpg" width="400px"/>

## Mapas/Dicionarios
