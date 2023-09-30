alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = prompt('Digite qual o número máximo: ');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    tentativas++;
}

let  palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

