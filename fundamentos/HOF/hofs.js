const animals = [
  { name: 'Elefante', age: 12 },
  { name: 'Raposa', age: 1 },
  { name: 'Dinossauro', age: 5 },
];

const zoo = ['Zoologico da paz', 'Animais Felizes', 'Impa'];

// .forEach, .map, .reduce, .filter,, .sort, .some, .find, .every,
// forEach -> Faz um loop, sem retornar nada.
// .map -> Sempre retorna um array.
// .reduce -> retorna algo que você quer
// Me mostre os nomes dos animais que possuem no meu zoológico.
// const names = ['nome1', 'nome2', 'nome3']

const animalNAmes = () => animals.map((animal) => animal.name);

// console.log(animalNAmes());

const animalsFilter = () => {
  return animals.some((animal) => animal.age >= 5);
};

console.log(animalsFilter());
