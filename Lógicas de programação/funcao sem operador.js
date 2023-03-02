function Multiplicar(numero1,numero2,calculo=0){
  for (let index = 0;index < numero1; index++){
    calculo+=numero2;
  }
  return (calculo)
}
console.log(Multiplicar(7,7))
console.log(Multiplicar(5,4))
console.log(Multiplicar(1,4))
console.log(Multiplicar(2,5))
