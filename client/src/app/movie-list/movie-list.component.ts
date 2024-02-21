import { Component, Input } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movies: Movie[] = [];
  constructor(private api: ApiClientService) {}
  ngOnInit(): void {
    this.getDiscoverMovies();
  }
  getDiscoverMovies() {
    this.api.getDiscoverMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
