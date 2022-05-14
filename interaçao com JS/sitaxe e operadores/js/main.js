function comparaNumeros(num1,num2){
    const primeiraFrase = criaPrimeiraFrase(num1,
    num2);
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais ='';
    if(num1 !== num2){
        saoIguais = 'não'

    }
    return `os numeros ${num1} e num2 ${saoIguais} são iguais`
}