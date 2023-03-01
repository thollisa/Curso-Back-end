function AnosEmDias(){
 IdadeDias= idade*365
 return (IdadeDias)
}
var idade=prompt(`Qual a sua idade? ${idade}`)
 console.log (`Idade anos: ${idade} \n Idade dias ${AnosEmDias(idade)} dias`);