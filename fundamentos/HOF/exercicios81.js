const namesGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = () => {
  const employees = {
    id1: namesGenerator('Pedro Guerra'),
    id2: namesGenerator('Luiza Drumond'),
    id3: namesGenerator('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(namesGenerator));
