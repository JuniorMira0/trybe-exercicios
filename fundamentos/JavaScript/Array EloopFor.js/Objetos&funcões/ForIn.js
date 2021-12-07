/*
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (let key in names) {
  console.log('Ola' + ' ' + names[key])
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key, car[key])
}

for (let key in info) {
  console.log(info[key])
}

for (let key in info) {
  console.log(key)
}


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim'

let objeto = {
  personagem: 'Margarida e Tio Patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'sim'
};

for (let key in objeto){
  console.log(key, objeto[key])
}

*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor['nome'] + ' ' + leitor['sobrenome']} se chama ${leitor.livrosFavoritos[0].titulo} `)

