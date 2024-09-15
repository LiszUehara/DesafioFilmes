import axios from "axios";


const api = "https://tv5hn2gvyijpl76yxlmsy66jwa0nlmxn.lambda-url.us-east-1.on.aws/"


class movieService {
    async index (){
        const resposta = await axios.get(api)
        console.log(resposta)
        return {filme: resposta.data}
    }
}


export default movieService

