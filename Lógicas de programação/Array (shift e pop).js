
function ReturnUEA (Num) {
    const primeiroNum= Num.shift()
    const ultimoNum= Num.pop()

    return [primeiroNum,ultimoNum]
} 
console.log (ReturnUEA([17,11,12,6,87]))