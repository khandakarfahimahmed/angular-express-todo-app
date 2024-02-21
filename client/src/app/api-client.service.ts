import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  readonly baseUrl = 'https://image.tmdb.org/t/p/w300/';
  url = 'http://cw-api.eu-west-3.elasticbeanstalk.com/movied/discover';
  detailUrl = 'http://cw-api.eu-west-3.elasticbeanstalk.com/movied/movie/';

  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
  getCategoryMovie(catergoryId: number): Observable<any> {
    return this.http.get<any>(this.detailUrl + catergoryId);
  }
}
