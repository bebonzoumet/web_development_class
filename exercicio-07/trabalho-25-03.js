var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do bloco if
  var b = 1; // O escopo é dentro da função
  const c = 3; // Não pode ser alterada
  console.log(c);

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1

var array = [1,2,3,4,['teste',5,6],5,6,7];

console.log(array.length); // Tamanho do array = 8
console.log(array[1]); // Segundo item do arary (começa em 0)
array[8]='inserindo coisa'; // Insere no indice 8
console.log(array);
array.push('insere no final');// Insere no final do array
console.log(array);
array.pop();// Tira do final do array
console.log(array);
array.shift();// Tira do inicio do array
console.log(array);
array.unshift('coisa no inicio');// Coloca coisa no inicio do array
console.log(array);
