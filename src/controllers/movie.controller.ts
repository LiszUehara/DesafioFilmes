import { Request, Response } from "express";
import ApiService from '../service/serviceApi/api.services';
import FilmesService from '../service/serviceFilmes/formatFilme';


class MovieControllers {
  private serviceApi: ApiService
  private service: FilmesService
  constructor() {
    this.serviceApi = new ApiService();
    this.service = new FilmesService();
  }
  async index(_request: Request, response: Response) {
    try {
        const respostaApi = await this.serviceApi.index()
        const filmes = await this.service.index(respostaApi.filmes)
        return response.send(filmes);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}


export default MovieControllers

