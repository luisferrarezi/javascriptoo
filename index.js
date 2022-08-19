import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Luis", 77128354034);
console.log(cliente1);

const conta1 = new ContaCorrente(1001, cliente1);
console.log(conta1);

conta1.depositar(100);
console.log(conta1.saldo);

conta1.depositar(200);
console.log(conta1.saldo);

const valorSacado = conta1.sacar(200);
console.log(valorSacado);
console.log(conta1);

const cliente2 = new Cliente("Elisangela", 61637206011);
console.log(cliente2);
const conta2 = new ContaCorrente(1002,cliente2);
console.log(conta2);

conta1.transferir(50, conta2);
console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroContas);