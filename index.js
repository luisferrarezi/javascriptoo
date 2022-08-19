import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Luis", 77128354034);
const contaCorrente = new ContaCorrente(1001, cliente1);
console.log(contaCorrente);

contaCorrente.depositar(100);
console.log(contaCorrente);

contaCorrente.sacar(20);
console.log(contaCorrente);

const cliente2 = new Cliente("Elisangela", 61637206011);
const contaPoupanca = new ContaPoupanca(500, cliente2, 1002);
console.log(contaPoupanca);