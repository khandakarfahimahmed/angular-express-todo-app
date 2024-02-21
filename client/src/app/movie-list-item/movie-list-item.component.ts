import { Component, Input, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css',
})
export class MovieListItemComponent {
  movie: any;

  constructor(private api: ApiClientService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategoryMovie(id);
  }
  getCategoryMovie(a: any) {
    this.api.getCategoryMovie(a).subscribe((movies) => {
      this.movie = movies;
      console.log(this.movie);
    });
  }
}
