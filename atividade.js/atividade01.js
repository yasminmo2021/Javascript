import entradaDados from 'readline-sync';

let dia = entradaDados.questionInt("Informe o dia da semana (de 1 a 7);");
switch (dia) {
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("Domingo")
        break
    default:
        console.log("Esse dia não existe!")
        break;
}