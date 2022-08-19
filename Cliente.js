export class Cliente{
  /*public*/
  nome;

  /*private*/
  _cpf;        

  get cpf(){
    return this._cpf;
  }

  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;          
  }
}