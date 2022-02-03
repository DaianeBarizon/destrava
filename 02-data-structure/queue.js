/**
 * Implementação da estrutura Queue FIFO (First In, Last Out)
 *
 * Métodos obrigatórios:
 * - Enqueue(number) -> deve adicionar um item no final da fila
 * - Dequeue() -> deve remover e retornar o primeiro item da fila
 * - Print -> deve imprimir a estrutura no console
 **/

const list = [1, 3, 7, 5];

// eu vou adicionar [1, 3, 7, 5, [8]]
/* const enqueue =  (number) => {
  const originalArrayLength = list.length;

  list[originalArrayLength] = number

  return list
}

console.log(enqueue(2)); */

const dequeue = () => {
  const originalArrayLength = list.length;

  const removedItem = list[0]

  for (let i = 0; i < originalArrayLength; i++) {
      list[i - 1] = list[i]
  }

  return removedItem
}

console.log(dequeue());