let numMegaSena = []
let gabarito = [40, 20, 56, 4, 37, 16]
let resultado = []
var k = 0, cont = 0; max=60;

function sorteia() {
    for(j=0;j<6;j++){
        var atual = Math.floor(Math.random()*max+1); 
        for(i=0;i<numMegaSena.length;i++){
          if(atual===numMegaSena[i]){atual = Math.floor(Math.random()*max+1);i=-1;}
            }
        numMegaSena[i]=atual;
        }
        numMegaSena = numMegaSena.sort(function(a, b){return a-b});
}

function numeroEscolhido(num) {
    do {
        var num = prompt("Informe o numero: ")
        numMegaSena.push(num)
        return num
    } while (num <= 0 || num > 60)
}

do{
var resp = prompt("Digite S para numero sorteado ou E para numero escolhido")
}while(/^[0-9]+$/.test(resp))

if (resp.toUpperCase() == 'S') {
    sorteia()

} else if (resp.toUpperCase() == 'E') {
    for (let index = 0; index < 6; index++) {
        do{
        numMegaSena[index] = numeroEscolhido()
        }while(/^[0-9]+$/.test(numeroEscolhido)) 
        console.log(numMegaSena[index])
        
    }
}
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (numMegaSena[i] == gabarito[j]) {
            resultado[k++] = numMegaSena[i]
            cont = cont + 1
        }
    }
}
console.log(numMegaSena)
console.log(`Gabarito oficial: ${gabarito}`)
console.log(`Resultado: ${resultado}`)
console.log(`${cont} acertos!`)