const pessoa = {
    nome: "Eliab",
    idade: "16",
    cidade: "Curitiba"
};

const jsonString = '{"nome":"Eliab","idade":16}';
const objetoJS = JSON.parse(jsonString);

console.log(objetoJS.nome); // Eliab
console.log(typeof objetoJS); // object
