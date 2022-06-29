const lista =[
    {
        name:'sabao em pó',
        preco:30,
    },
    {
        name:'café',
        preco:12,
    },
    {
        name:'filé de peito',
        preco:21,
    },
];

const saldoDisponivel =200;

function calcSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current){
        return prev - current.preco;
    },saldoDisponivel);
}