interface Member {
  name: string;
  age: number;
  address: string;
  notification: boolean;
  email: string;
}

const person: Member = {
  name: 'Joey',
  age: 47,
  address: '82 jeffcott street',
  notification: false,
  email: 'joeyvico@gmail.com'
};
const updatedperson = {
  name: 'Joey Vico',
  address: '82 Jeffcott St',
  notification: true
};

console.log(person);
console.log(updatedperson);
const updated = { ...person, ...updatedperson };
console.log(updated);
