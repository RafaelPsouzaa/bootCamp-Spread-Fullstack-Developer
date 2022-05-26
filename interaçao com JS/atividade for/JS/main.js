const alunos = [
    {
        nome:'joao',
        nota: 5,
        turma:'1b',

    },
    {
        nome:'maria',
        nota: 7,
        turma:'1b',

    },
    {
        nome:'Bryan',
        nota: 10,
        turma:'1b',

    },
    {
        nome:'Rafael',
        nota: 5,
        turma:'1b',

    },
];

function alunosAprovados (arr,media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        const {nota,nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,7));
