//Exercicios 1
function exercicio1(){
    const nome = "Felipe";
    const idade = 20;
    const almocei = true;

    console.log("Nome: ", nome);
    console.log("Idade: ", idade);
    console.log("Já almocei: ", almocei);
}


//Exercicio 2
//Calcular soma, subtracao, multiplicacao e divisao
function exercicio2(){
    const n1 = 6, n2 = 2;
    const soma = n1 + n2;
    const sub = n1 - n2;
    const multi = n1 * n2;
    const divi = n1 / n2;

    console.log(`Numero 1 :${n1}\nNumero 2 :${n2} `);
    console.log(`Soma: ${soma}\nSubtração: ${sub}\nMultiplição: ${multi}\nDivisão: ${divi} `);
}


//Exercicio 3
function exercicio3(){
    const cidade = "Itapevi";
    const estado = "São Paulo";

    console.log("Eu moro em " + cidade + ", " + estado + ".");
    console.log(`Eu moro em ${cidade}, ${estado}.`);
}
//Exercicio 4
function exercicio4() {
    const readline = require("readline");
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.question('Qual a sua idade? ', (idade) => {
        if (idade < 18) {
            console.log(`Falta ${18-idade} anos para você tirar a habilitação`);
        } else {
            console.log("Você pode tirar a CNH!");
        }
        r1.close();
    });

    r1.on('close', () => {
        process.exit(0);
    });
}

//Exercicio 5
function exercicio5() {
    const readline = require("readline");
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Digite o valor que deseja saber a tabuada: ', (value) => {
        for (i=1; i<=10; i++){
            let multi = i * value;
            console.log(`${value} x ${i} = ${multi}`);
        };
        r1.close();
    });

    r1.on('close', () => {
        process.exit(0);
    });
}


//Exercicio 6

function exercicio6(){
    const n1 = 25;
    const n2 = "25";

    //Os resultados serão diferentes pois o == faz a verificação/comparação do valor das variaveis n1 e n2, o === faz a verificação/comparação do tipo e do valor das variaves
    console.log(n1 == n2);
    console.log(n1 === n2);
    
}

//exercicio 7

function exercicio7() {
    const readline = require('readline');
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Digite o dia(1 a 7): ', (day) => {
        switch (Number(day)) {
            case 1:
                console.log("Segunda-feira");
                break;
            case 2:
                console.log("Terça-feira");
                break;
            case 3:
                console.log("Quarta-feira");
                break;
            case 4:
                console.log("Quinta-feira");
                break;
            case 5:
                console.log("Sexta-feira");
                break;
            case 6:
                console.log("Sábado");
                break;
            case 7:
                console.log("Domingo");
                break;
            default:
                console.log("Dia incompreensivel!");
                break;
        };
        r1.close();
    });

    r1.on('close', () => {
        process.exit(0);
    })
}

//exercicio 8
function exercicio8() {
    let number = 10;
    while (true) {
        if (number < 5){
            break
        };
        console.log(number--);
    };
}

//exercicio9
function exercicio9() {
    for (i = 1; i <= 20; i++){
        if (i % 2 == 1){
            continue;
        }
        console.log(`Econtrei um numero par: [${i}]`);
    };
}

//exercicio10

function exercicio10() {
    const readline = require("readline");
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Digite o primeiro valor: ', (n1) => {
        r1.question('Digite o segundo valor: ', (n2) => {
            r1.question('Digite a operacao que deseja(+ - * /): ', (ope) => {
                
                let calc;

                if (ope === '+'){
                    calc = Number(n1) + Number(n2);
                    console.log(`${n1} ${ope} ${n2} = ${calc}`);
                } else if (ope === '-') {
                    calc = Number(n1) - Number(n2);
                    console.log(`${n1} ${ope} ${n2} = ${calc}`);
                } else if (ope === '*') {
                    calc = Number(n1) * Number(n2);
                    console.log(`${n1} ${ope} ${n2} = ${calc}`);
                } else if (ope === '/') {
                    calc = Number(n1) / Number(n2);
                    console.log(`${n1} ${ope} ${n2} = ${calc}`);
                } else {
                    console.log("Operacao invalida!");
                }

                r1.close();
            });
        });
    });

    r1.on('close', () => {
        process.exit(0);
    })
}

// Exercicios em funcoes para facilitar a execucao individual
exercicio1()
exercicio2()
exercicio3()
exercicio4()
exercicio5()
exercicio6()
exercicio7()
exercicio8()
exercicio9()
exercicio10()

