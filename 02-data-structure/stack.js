/**
 * Implementação da estrutura Stack LIFO (Last in, First Out)
 *
 * Métodos obrigatórios:
 * - Push(number) -> deve adicionar um item no final da pilha
 * - Pop() -> deve remover o último item da pilha
 * - Print -> deve imprimir a estrutura no console
 **/

const list = [1, 3, 7, 5];

const originalArrayLength = list.length;

//eu vou adicionar em baixo dela então [[8], 1, 3, 7, 5]

const push = (number) => {
  const newArray = [] 

  for (let i = 1; i <= originalArrayLength - 1; i++) {
    newArray[i - 1] = list[i];
 }

  return newArray
}

console.log(push(8));

//o último item da pilha é o primeiro que entrou [3, 7, 5]
const pop = () => {
  const newArray = [] 

  for (let i = 1; i < originalArrayLength; i++) {
    newArray[i - 1] = list[i]
}

  return newArray
}

console.log(pop());