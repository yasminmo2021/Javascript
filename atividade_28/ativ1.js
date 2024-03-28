import rl from 'readline-sync';

function caixaAlta(string) {
    return string.toUpperCase();
}
let nome = rl.question('Informe seu nome: ')
console.log(`EU SOU O ${caixaAlta(nome)}`)

const upperCase = function (string) { return string.toUpperCase()};
console.log(`VOCÊ NÃO É O ${upperCase(nome)}`);

const mauisculas = (string) => string.toUpperCase();
console.log(`ENTENDEU, ${mauisculas(nome)}!?`);