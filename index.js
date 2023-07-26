

let nota50 = 0;
let nota10 = 0;
let nota05 = 0;
let nota01 = 0;

let informeSaque = Number(prompt('Informe o valor que deseja sacar: '));

let valorSacado = informeSaque;
console.log(`Valor de entrada: ${informeSaque}`);


//// Com FOR



for (; informeSaque >= 50; nota50++) {
    informeSaque -= 50;

}
for (; informeSaque >= 10; nota10++) {
    informeSaque -= 10;

}
for (; informeSaque >= 5; nota05++) {
    informeSaque -= 5;

}
for (; informeSaque >= 1; nota01++) {
    informeSaque -= 1;

}



//////  Com While:

/*

while (informeSaque >= 50) {
    informeSaque -= 10;
    nota50++;
}

while (informeSaque >= 10) {
    informeSaque -= 10;
    nota10++;
}

while (informeSaque >= 5) {
    informeSaque -= 5;
    nota05++;
}

while (informeSaque >= 1) {
    informeSaque -= 1;
    nota01++;
}



*/



console.log(`Valor de saida de 50: ${nota50}`);
console.log(`Valor de saida de 10: ${nota10}`);
console.log(`Valor de saida de 05: ${nota05}`);
console.log(`Valor de saida de 01: ${nota01}`);




