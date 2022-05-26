function calcularIdade(anos){
    return`Daqui  a ${anos} anos, ${this.nome}terá ${this.idade+anos} anos de idade`;
}

const pessoa1 = {
    nome:"Rafael",
    idade:30,
}

const pessoa2 = {
    nome:"clara",
    idade: 35,
}

const animal = {
    nome: "Fiona",
    idade:5,
    raca:"pastor"
}

console.log(calcularIdade(pessoa1,50));