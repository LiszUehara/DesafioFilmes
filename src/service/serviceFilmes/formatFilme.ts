import { IFilmes } from "../../models/filmes.model";
import { IOriginal } from "../../models/original.model";



class filmeService {
    async index (filmes: IOriginal[]){
        const filmesFormat:IFilmes[] = filmes.map(
            (filme)=>{
                return {
                    titulo: filme.titulo,
                    ano: filme.ano,
                    diretor: filme.diretor,
                    genero: filme.genero,
                    duracaoSegundos: this.getDuracaoSegundos(filme),
                    notaIMDb: this.getNotaIMDB(filme),
                    lucro: this.getLucro(filme),
                    maiorPremiacao: this.getMaiorPremiacao(filme),
                    sinopse: this.getSinopse(filme),
                }
            })
    return filmesFormat
    }
    private getLucro(filme: IOriginal){
        let orcamento = this.textToNumber(filme.orcamento)
        let bilheteria = this.textToNumber(filme.bilheteria)
        let lucro: number | string = (bilheteria - orcamento)
        if(lucro>1000000000){
           lucro = "$" + lucro/1000000000 + " bilhões" 
        } else if(lucro>1000000){
            lucro = "$" + lucro/1000000 + " milhões" 
         } else if(lucro < 0) {
            lucro = "Prejuizo"
         } else {
            return lucro.toString()
         }
        
        return lucro
    }
    private textToNumber(text: string): number {
        text = text.trim().replace('$', '').replace(" ", "");
        if (text.includes("bilhões")) {
            let value = parseFloat(text.replace("bilhões", "").trim());
            return value * 1000000000;
        } else if (text.includes("bilhão")) {
            let value = parseFloat(text.replace("bilhão", "").trim());
            return value * 1000000000;
        } else if (text.includes("milhões")) {
            let value = parseFloat(text.replace("milhões", "").trim());
            return value * 1000000;
        } else if (text.includes("milhão")) {
            let value = parseFloat(text.replace("milhão", "").trim());
            return value * 1000000;
        } else if (text.includes("mil")) {
            let value = parseFloat(text.replace("mil", "").trim());
            return value * 1000;
        }
        
        return parseFloat(text);
    }
    private getMaiorPremiacao(filme: IOriginal){
        let maiorPremiacao = filme.premios[0]
        for(let i=0; i<filme.premios.length; i++ ){
            if(filme.premios[i].relevancia>maiorPremiacao.relevancia){
                maiorPremiacao = filme.premios[i];
            }
        }
        return maiorPremiacao.nome
    }
    private getDuracaoSegundos(filme: IOriginal) {
        return filme.duracao*60;
    }
    private getNotaIMDB(filme: IOriginal){
        const IMDb = filme.ratings.find((rating:{valor: number; fonte: String})=>rating.fonte="IMDb");
        return IMDb?.valor || 0
    }
    private getSinopse(filme: IOriginal){
        let sinopse = filme.sinopse.reduce(
            (element: { texto: string; idioma: string }, currentValue) => {
                if (element.idioma === "pt-br") {
                    return element;
                } else if (element.idioma === "en" && currentValue.idioma === "pt-br") {
                    return currentValue;
                }
                return currentValue;
            }, filme.sinopse[0]);
        return sinopse.texto
    }
}

export default filmeService