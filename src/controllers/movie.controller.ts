import { Request, Response } from "express";
import movieService from '../service/movies.services';


class MovieControllers {
  private service: movieService
  constructor() {
    this.service = new movieService();
  }
  async index(request: Request, response: Response) {
    try {
        return response.send(await this.service.index());
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}


export default MovieControllers

