import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;
  constructor(private movieService: MovieService) { }

  movies: any[] = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: any) {
    this.movieService.getUpcomingMovies(this.currentPage).subscribe((res) => {
      this.movies = [...this.movies, ...res.results];
      console.log(this.movies);

      if (event) {
        event.target.complete();
      }

      if (this.currentPage === res.total_pages) {
        this.infiniteScroll.disabled = true;
      } else {
        this.currentPage++;
      }
    });
  }

  loadMore(event: any) {
    this.loadMovies(event);
  }
}
