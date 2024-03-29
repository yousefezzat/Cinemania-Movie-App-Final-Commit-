import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { environment } from '../../../environments/environment';
import { MovieInterface } from '../../../Models/movie-interface';
import { TopRatedMoviesResponseInterface } from '../../../Models/top-rated-movies-response-interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {
  // baseMoviesUrl = environment.baseMoviesUrl;
  baseUrl = environment.baseUrl;
  imgUrl = environment.baseImgUrl;
  // apiKey = environment.apiKey;


  receivedMovies: MovieInterface[] = [];


  constructor(private movieService: MovieService) { }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.movieService.getMovies().subscribe((movies) => {
      this.receivedMovies = movies.results;

    });
  }

}
