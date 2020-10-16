import { Loja } from './loja';

export class Venda {    

    constructor(public loja :Loja, public DataHora :Date, public ccf :String, public coo :String) {}

    public dadosVenda(): string {
        this.validarCamposObrigatorios()

        var aux = this.DataHora
		var _date = Venda.intFormat(aux.getDate(),2)
		var _month = Venda.intFormat(aux.getMonth(),2)
		var _year = Venda.intFormat(aux.getFullYear(),2)
		var _hours = Venda.intFormat(aux.getHours(),2)
		var _minutes = Venda.intFormat(aux.getMinutes(),2)
		var _seconds = Venda.intFormat(aux.getSeconds(),2)

		var _datatime = `${_date}/${_month}/${_year} ${_hours}:${_minutes}:${_seconds}`		

        var dados = `${_datatime}V CCF:${this.ccf} COO:${this.coo}`;       
        return dados;
    }

	private static intFormat(num:number, tam:number): string {
		var _num = num.toString()
		while(_num.length<tam){
			_num = "0" + _num
		}
		return _num		
	}
    
    private validarCamposObrigatorios():void {		
        if (!this.ccf){
            throw new Error("O campo ccf da venda não é valido")
        }
        if (!this.coo){
            throw new Error("O campo coo da venda não é valido")
        }        
    }
    
}


