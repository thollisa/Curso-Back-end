function inverso(valor) {
    const tipo= typeof valor
    if (tipo=="boolean")
     return !valor
    else if (tipo=="number")
     return-valor
    else
     return `boolean ou numero esperados, mas o paremetro é do tipo ${tipo}` 
}
console.log(inverso(true))
console.log(inverso(5))
console.log(inverso(-2000))
console.log(inverso("6"))