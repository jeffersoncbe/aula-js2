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

// let operacao = prompt("Escolha uma operação: +, -, * ou /");
// let n1 = Number(prompt("Digite o primeiro número:"));
// let n2 = Number(prompt("Digite o segundo número:"));
// let resultado;

// switch (operacao) {
//   case '+':
//     resultado = n1 + n2;
//     break;
//   case '-':
//     resultado = n1 - n2;
//     break;
//   case '*':
//     resultado = n1 * n2;
//     break;
//   case '/':
//     resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero!";
//     break;
//   default:
//     resultado = "Operação inválida!";
//     break;
// }

// alert("Resultado: " + resultado);

// let opcao = Number(prompt('escolha uma opção\n1 - Saque\n2 - Transferência\n3 - Saldo\n4 - Extrato'));

// switch (opcao) {
//     case 1:
//         alert('Você escolheu: Saque');
//         break;
//     case 2:
//         alert('Você escolheu: Transferência');
//         break;
//     case 3:
//         alert('Você escolheu: Saldo');
//         break;
//     case 4:
//         alert('Você escolheu: Extrato');
//         break;
//         default:
//             alert('Opção Inválida! Tente Novamente!');
//             break;
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// __________________________

// for (let i = 2; i <= 20; i+=2) {
//     console.log(i);
// }

// Nessa operação vai calcular de 1 a 10, contando de dois em dois.
// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0)
//     console.log(i);
// }

// let numero = Number(prompt("Digite um número para ver a tabuada"));

// let tabuada = ""; //string acumuladora

// for (let i = 1; i <= 10; i++) {
//     tabuada += `${numero} x ${i} = ${numero * i}\n`; //adiciona cada linha com quebra

// }

// alert(tabuada);




// let senha = Number(prompt("Digite sua senha"));

// while (senha !== 1234) {
//     senha = Number(prompt("Senha inválida. Tente novamente:"));
// }
// alert("Acesso concedido.");



// let palavra = prompt("Digite uma palavra");
// let resultado = "";

// for (let i = 1; i <= 5; i++) {
// resultado += `${i} - ${palavra}\n`;

// }
// alert(resultado);


let numero = Number(prompt("Digite um numero acima de 4"));

while (numero > o) {
    if (numero % 2 === 0) {
        console.log(`Número par: ${numero}`);
    } else {
        console.klog(`Número ímpar: ${numero}`);
    }
    numero--; //decrementa 1 a cada volta
}
