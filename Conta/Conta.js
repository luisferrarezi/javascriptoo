export class Conta{
  constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
      throw new Error("Não pode instanciar objeto do tipo conta!");
    }
    
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;        
  }

  get saldo(){
    return this._saldo;
  }
  
  get cliente(){
    return this._cliente;    
  }  

  set cliente(cliente){
    if(cliente instanceof Cliente){
        this._cliente = cliente;
    }
  }

  sacar(valor){
    throw new Error("Não pode usar esse método!");
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor){
    if (valor > 0){
        this._saldo += valor;
    }
  }      

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}