import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movie: any = {};
  creditList: any[] = [];
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    const movieID = this.route.snapshot.paramMap.get('id') as string;
    this.movieService.getMovieDetails(movieID).subscribe((res) => {
      this.movie = res;
      console.log(this.movie);
    });

    this.movieService.getMovieCredits(movieID).subscribe((res) => {
      this.creditList = res.cast;
      console.log(this.creditList);
    });
  }
}
