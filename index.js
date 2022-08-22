import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {ContaSalario} from "./Conta/ContaSalario.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const clienteLuis = new Cliente("Luis", "140.830.440-63");

const contaCorrente = new ContaCorrente(1001, clienteLuis);
console.log(contaCorrente);
contaCorrente.depositar(100);
console.log(contaCorrente);
contaCorrente.sacar(20);
console.log(contaCorrente);

const contaPoupanca = new ContaPoupanca(500, clienteLuis, 1002);
console.log(contaPoupanca);
contaPoupanca.sacar(20);
console.log(contaPoupanca);

const contaSalario = new ContaSalario(clienteLuis);
contaSalario.depositar(1000);
console.log(contaSalario);
contaSalario.sacar(200);
console.log(contaSalario);

const diretor = new Diretor("Elisangela", 20000, "864.153.930-14");
diretor.cadastrarSenha("12345");
const isLogadoDir = SistemaAutenticacao.login(diretor, "12345");
console.log(isLogadoDir);

const gerente = new Gerente("Dunha", 5000, "976.180.210-82");
gerente.cadastrarSenha("12345");
const isLogadoGer = SistemaAutenticacao.login(gerente, "54321");
console.log(isLogadoGer);

const cliente = new Cliente("Raimunda", "391.514.740-00", "11111");
const isLogadoCli = SistemaAutenticacao.login(cliente, "11111");
console.log(isLogadoCli);