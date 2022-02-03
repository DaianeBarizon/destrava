/**
 * Implementação da estrutura lista
 *
 * A lista deve armazenar apenas números
 *
 * Métodos obrigatórios:
 * - insertFront(number) -> deve inserir o item no inicio da lista
 * - insertAt(number, position) -> deve inserir o item em uma posição específica
 * - removeAt(position) -> deve remover o item da posição específica
 * - print() -> deve imprimir a estrutura no console
 **/

const list = [2, 3, 7, 5];

const originalArrayLength = list.length;

const insertFront = (value) => {
  //adiciona uma posição no final do array
  list.push(0)

  //move todos os elementos para frente até a primeira posição
  for (let i = originalArrayLength; i > 0; i--) {
    list[i] = list[i - 1]
  }

  //adiciona o valor na primeira posição
  list[0] = value

  return list
};

console.log(insertFront(8));

const insertAt = (value, position) => {
  //adiciona uma posição no final do array
  list.push(0)
  
  //move todos os elementos para frente até a posição que a gente precisa
  for (let i = originalArrayLength; i > position; i--) {
    list[i] = list[i - 1]
  }
  
  //adiciona o valor na posição vaga
  list[position] = value

  return list
}

console.log(insertAt(66, 3));

const removeAt = (position) => {
  const newArray = [] 

  //se a posição for maior ou igual que o tamanho da lista retorna ela mesma
  if (position >= originalArrayLength) {
    return list    
  }

  //se a posição do loop for menor a posição inserida remove da lista
  for (let i = 0; i < originalArrayLength; i++) {
    if (i < position) {
      newArray[i] = list[i];
    } 
  }

  return newArray
}

console.log(removeAt(2));