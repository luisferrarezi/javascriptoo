import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Luis";
cliente1.cpf = 77128354034;
console.log(cliente1);

const contaCorrenteLuis = new ContaCorrente();
contaCorrenteLuis.agencia = 1001;
contaCorrenteLuis.cliente = cliente1;
console.log(contaCorrenteLuis);

contaCorrenteLuis.depositar(100);
console.log(contaCorrenteLuis.getSaldo());

contaCorrenteLuis.depositar(200);
console.log(contaCorrenteLuis.getSaldo());

const valorSacado = contaCorrenteLuis.sacar(200);
console.log(valorSacado);
console.log(contaCorrenteLuis);

const cliente2 = new Cliente();
cliente2.nome = "Elisangela";
cliente2.cpf = 61637206011;
console.log(cliente2);
const conta2 = new ContaCorrente();
conta2.agencia = 1002;
conta2.cliente = cliente2;
console.log(conta2);

contaCorrenteLuis.transferir(50, conta2);
console.log(conta2);
console.log(contaCorrenteLuis);