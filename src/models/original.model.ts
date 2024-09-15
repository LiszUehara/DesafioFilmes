export interface IOriginal {
    titulo: String;
    ano: number;
    diretor: string;
    genero: string[];
    duracao: number;
    ratings: {valor: number; fonte: String}[];
    elenco: String[];
    sinopse: {texto: String; idioma: String}[];
    poster: String;
    trailer: String;
    locacoes: String[];
    orcamento: string;
    bilheteria: string;
    premios: {nome: String; relevancia: number}[];
}