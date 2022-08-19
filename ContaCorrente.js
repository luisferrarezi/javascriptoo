import { Cliente } from "./Cliente.js";

export class ContaCorrente{
  /*public*/  
  agencia;

  /*private*/
  _saldo = 0;
  _cliente;

  static numeroContas = 0;

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;

    ContaCorrente.numeroContas += 1;
  }

  get saldo(){
    return this._saldo;
  }
  
  get cliente(){
    return this._cliente;    
  }  

  get numeroContas(){
    return this.numeroContas;
  }

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

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  set cliente(cliente){
    if(cliente instanceof Cliente){
        this._cliente = cliente;
    }
  }
}