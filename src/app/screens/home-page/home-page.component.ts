import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  //Creamos listas donde guardaremos peliculas
  moviesRecommended: Movie[] = [];
  moviesNew: Movie[] = [];
  moviesTopRated: Movie[] = [];
  moviesUpComming: Movie[] = [];
  isAdmin = false;

  constructor(private _movieService: MovieService,private router:Router) {}


  
  ngOnInit() {
    this.loadMoviesRecommended();
    this.loadNewMovies();
    this.loadTopRatedMovies();
    this.loadUpCommmingMovies();
    
  }


  //Cargamos las peliculas Recomendadas a la lista
  loadMoviesRecommended() {
    this._movieService.getPopularMovies().subscribe(
      (movies) => {
        this.moviesRecommended = movies;
      },
      (error) => {
        console.error('Error al cargar las películas', error);
      }
    );
  }
 
  //Cargamos las peliculas Nuevas a la lista
   loadNewMovies() {
    this._movieService.getNewMovies().subscribe(
      (movies) => {
        this.moviesNew = movies;
      },
      (error) => {
        console.error('Error al cargar las películas', error);
      }
    );
  }

  //Cargamos las peliculas mejor valoradas a la lista
  loadTopRatedMovies() {
    this._movieService.getTopRatedMovies().subscribe(
      (movies) => {
        this.moviesTopRated = movies;
      },
      (error) => {
        console.error('Error al cargar las películas', error);
      }
    );
  }

  //Cargamos las peliculas 
   loadUpCommmingMovies() {
    this._movieService.getUpCommingMovies().subscribe(
      (movies) => {
        this.moviesUpComming = movies;
      },
      (error) => {
        console.error('Error al cargar las películas', error);
      }
    );
  }





}
