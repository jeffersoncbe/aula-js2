// let cor = 'vermelho';

// switch (cor) {
//     case 'vermelho':
//         console.log('Pare');
//         break;
//     case 'amarelo':
//         console.log('Atenção');
//         break;
//     case 'verde':
//         console.log('Pode Passar');
//         break;
//     default:
//         console.log('Cor Inválida');
//         break;
// }

// let cor = prompt("Digite uma cor do semáforo (vermelho, amarelo ou verde):").toLowerCase();

// switch (cor) {
//     case 'vermelho':
//         alert('Pare');
//         break;
//     case 'amarelo':
//         alert('Atenção');
//         break;
//     case 'verde':
//         alert('Pode Passar');
//         break;
//     default:
//         alert('Cor Inválida');
//         break;
// }

let operacao = prompt("Escolha uma operação: +, -, * ou /");
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let resultado;

switch (operacao) {
  case '+':
    resultado = n1 + n2;
    break;
  case '-':
    resultado = n1 - n2;
    break;
  case '*':
    resultado = n1 * n2;
    break;
  case '/':
    resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero!";
    break;
  default:
    resultado = "Operação inválida!";
    break;
}

alert("Resultado: " + resultado);