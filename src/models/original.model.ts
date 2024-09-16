export interface IOriginal {
    titulo: string;
    ano: number;
    diretor: string;
    genero: string[];
    duracao: number;
    ratings: {valor: number; fonte: string}[];
    elenco: string[];
    sinopse: {texto: string; idioma: string}[];
    poster: string;
    trailer: string;
    locacoes: string[];
    orcamento: string;
    bilheteria: string;
    premios: {nome: string; relevancia: number}[];
}