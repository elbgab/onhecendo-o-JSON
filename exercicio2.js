const object = {
    nome: "livro",
    titulo: "CarSports",
    autor: "Eliab",
    ano: "2025"
};

const myObject = { nome: "CarSports", autor:"Eliab", age: 30, };
    const jsonString = JSON.stringify(myObject);
    console.log(jsonString); // Output: {"name":"CarSports","age":2025}
