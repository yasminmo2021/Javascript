
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};


// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let chave in pessoa) {
console.log(`${chave}: ${pessoa[chave]}`);
}