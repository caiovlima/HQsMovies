import { Observable } from 'rxjs';
import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie: Movie;
  title: string = '';
  isLoadingResults = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.title = 'batman';
    this.apiService.getMovie(this.title).subscribe(title => {
      this.movie = title;
      this.title = '';
    });
  }


  getFilm(title) {
    this.apiService.getMovie(title)
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie);
        console.log(title);
        this.isLoadingResults = false;
      });
  }

}
