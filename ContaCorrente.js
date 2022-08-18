export class ContaCorrente{
    /*public*/
    agencia;
    cliente;

    /*private*/
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor > 0){
            this._saldo += valor;
        }
    }    

    getSaldo(){
        return this._saldo;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}