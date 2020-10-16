import { Venda } from './venda';
import { Loja } from './loja';
import { Endereco } from './endereco';


function rodarTestarRetorno(expected: String, venda: Venda): void  {

	// action
	let retorno = venda.dadosVenda();

	// assertion		
	expect(expected).toBe(retorno);
}

function verificarCampoObrigatorio(mensagemEsperada: String, venda: Venda):void{
	try {
		venda.dadosVenda();
	} catch (e) {
		expect(e.message).toBe(mensagemEsperada);
	}
}
let NOME_LOJA: string = "Loja 1";
let LOGRADOURO: string = "Log 1";
let NUMERO:number = 10;
let COMPLEMENTO: string = "C1";
let BAIRRO: string = "Bai 1";
let MUNICIPIO: string = "Mun 1";
let ESTADO: string = "E1";
let CEP: string = "11111-111";
let TELEFONE: string = "(11) 1111-1111";
let OBSERVACAO: string = "Obs 1";
let CNPJ: string = "11.111.111/1111-11";
let INSCRICAO_ESTADUAL: string = "123456789";

let LOJA_COMPLETA:Loja = new Loja(NOME_LOJA,
			new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO,
			CNPJ, INSCRICAO_ESTADUAL);

//testes venda

let datahora:Date = new Date(2015,10,29,11,9,47);
let ccf: string = "021784";
let coo: string = "035804";	

//venda
let TEXTO_ESPERADO_VENDA = "29/10/2015 11:09:47V CCF:021784 COO:035804";
test('venda', () => {
	rodarTestarRetorno(TEXTO_ESPERADO_VENDA,LOJA_COMPLETA.vender(datahora,ccf,coo));		
});

//venda sem ccf

test('venda_valida_ccf', () => {
	let VENDA_CCF_VAZIO: Venda  = LOJA_COMPLETA.vender(datahora,"",coo);
	verificarCampoObrigatorio("O campo ccf da venda não é valido", VENDA_CCF_VAZIO);	
});
//venda sem coo

test('venda_valida_coo', () => {
	let VENDA_COO_VAZIO: Venda  = LOJA_COMPLETA.vender(datahora,ccf,"");
	verificarCampoObrigatorio("O campo coo da venda não é valido", VENDA_COO_VAZIO);	
});
