 function MaiorOuIgual (n1,n2) {
 if(n1>n2) {
    return (`${n1} é maior que ${n2}`);
 }else 
  if (n1==n2){
    return (`${n1} é igual a ${2}`);
 }else
  if (n1<n2){
    return (`${n1} é menor que ${n2}`);
  }

}
do{
var n1= prompt ("Coloque o primeiro numero: ");
var n2= prompt ("Coloque o segundo numero:  ");
}while (!/^[0-9]+$/.test(n1) || !/^[0-9]+$/.test(n2));
MaiorOuIgual(n1,n2);