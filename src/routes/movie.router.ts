
import MovieControllers from '../controllers/movie.controller';
import { publicRouter } from './router';

const movieControllers = new MovieControllers();


publicRouter.get('/filmes', (request, response) =>
    movieControllers.index(request, response)
  );


export { publicRouter }