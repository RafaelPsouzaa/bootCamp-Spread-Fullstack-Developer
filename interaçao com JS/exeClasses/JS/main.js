class contaBancaria {
    constructor(agencia,numero,tipoCC,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipoCC = tipoCC;
        this._saldo = saldo;
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

}
//04:30 video