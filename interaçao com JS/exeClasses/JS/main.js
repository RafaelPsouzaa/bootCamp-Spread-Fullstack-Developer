class contaBancaria {
    constructor(agencia,numero,tipoCC){
        this.agencia = agencia;
        this.numero = numero;
        this.tipoCC = tipoCC;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
       this._saldo = valor;
    }
    sacar (valor){
        if(valor > this._saldo){
            return "operaçao negada "
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}
class contaCorrente extends contaBancaria{
    constructor (agencia,numero,cartaoCredito){
        super(agencia,numero);
            this.tipoCC = 'Corrente';
          this._cartaoCredito = cartaoCredito;
        
        
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor; 
    }
}
class contaPoupança extends contaBancaria{
    constructor (agencia,numero){
        super(agencia,numero);
            this.tipoCC = 'Poupança';
            
        
        
    }
   
}
class contaUniversitaria extends contaBancaria{
    constructor (agencia,numero){
        super(agencia,numero);
            this.tipoCC = 'Universitaria';
        
    }
    sacar(valor){
        if(valor > 500){
            return 'operaçao negada ';
        }
        this._saldo = this._saldo - valor;
    }
   
}