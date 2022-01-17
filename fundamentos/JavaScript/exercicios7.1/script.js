/* function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  console.log("ifScope + o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
}

testingScope(true);
 */

/* const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
}; */

/* const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, "3")); */

/* const people = {
  firstName: "Junior",
  age: 22,
  job: "dev",
};

let newKey = "city";

const fun = (objeto, nome, valor) => {
  objeto[newKey] = valor;
};
console.log(fun(people, newKey, "Curitiba"));
 */

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const skillsOfStudents = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`
    );
  }
};
