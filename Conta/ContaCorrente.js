import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  static numeroContas = 0;

  constructor(agencia, cliente){
    super(0, cliente, agencia);
    ContaCorrente.numeroContas += 1;
  }

  sacar(valor){
    const taxa = 1.1;
    
    this._sacar(valor, taxa);
  }
}