import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '7fbf48283223339b03bd65fd931982a5';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.map((result: any) => {
            return {
              id: result.id,
              title: result.original_title,
              description: result.overview,
              image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
              genres: Array.isArray(result.genres) ? result.genres.map((genre: any) => genre.name).join(', ') : 'No genres available',
              voteAverage: result.vote_average
            } as Movie;
          });
        } else {
          // Manejar el caso en que response.results sea undefined
          return []; // O devuelve un valor por defecto o lanza un error
        }
      })
    );
  }


  getNewMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.map((result: any) => {
            return {
              id: result.id,
              title: result.original_title,
              description: result.overview,
              image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
              genres: Array.isArray(result.genres) ? result.genres.map((genre: any) => genre.name).join(', ') : 'No genres available',
              voteAverage: result.vote_average
            } as Movie;
          });
        } else {
          // Manejar el caso en que response.results sea undefined
          return []; // O devuelve un valor por defecto o lanza un error, según tus necesidades.
        }
      })
    );
  }


  getTopRatedMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.map((result: any) => {
            return {
              id: result.id,
              title: result.original_title,
              description: result.overview,
              image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
              genres: Array.isArray(result.genres) ? result.genres.map((genre: any) => genre.name).join(', ') : 'No genres available',
              voteAverage: result.vote_average
            } as Movie;
          });
        } else {
          // Manejar el caso en que response.results sea undefined
          return []; // O devuelve un valor por defecto o lanza un error, según tus necesidades.
        }
      })
    );
  }



  getUpCommingMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.results) {
          return response.results.map((result: any) => {
            return {
              id: result.id,
              title: result.original_title,
              description: result.overview,
              image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
              genres: Array.isArray(result.genres) ? result.genres.map((genre: any) => genre.name).join(', ') : 'No genres available',
              voteAverage: result.vote_average
            } as Movie;
          });
        } else {
          // Manejar el caso en que response.results sea undefined
          return []; // O devuelve un valor por defecto o lanza un error, según tus necesidades.
        }
      })
    );
  }
}
