import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, tap, filter, catchError } from 'rxjs/operators';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly BASE_URL = 'http://www.omdbapi.com/?apikey=e43adb3&t=';

  constructor(
    private http: HttpClient) { }


    getMovie(title: string): Observable<Movie> {
      const url = `${this.BASE_URL}${title}`;
      return this.http.get<Movie>(url).pipe(
        tap(_ => console.log(`leu o TITLE title=${title}`)));
    }

}
