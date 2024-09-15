import { IFilmes } from "../../models/filmes.model";
import { IOriginal } from "../../models/original.model";



class filmeService {
    async index (filmes: IOriginal[]){
        const filmesFormat = filmes.map(
            (filme)=>{
                return {
                    lucro: this.getLucro(filme)
                }
            })
            console.log(filmesFormat)
    return filmesFormat
    }
    private getLucro(filme: IOriginal){
        let orcamento = this.textToNumber(filme.orcamento)
        let bilheteria = this.textToNumber(filme.bilheteria)
        let lucro: number | String = (bilheteria - orcamento)
        if(lucro>1000000000){
           lucro = "$" + lucro/1000000000 + " bilhões" 
        } else if(lucro>1000000){
            lucro = "$" + lucro/1000000 + " milhões" 
         } else if(lucro < 0) {
            lucro = "Prejuizo"
         } else {
            return lucro
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
}

export default filmeService