import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url: string = "http://api.weatherapi.com/v1/current.json?key=86cf100cade4408aa14211139211706&aqi=no&q=";

  constructor(private http: HttpClient) { 

  }

  get(location: string): Observable<string>
  {
    return this.http.get<any>(this.url + location).pipe(retry(1), catchError(this.processError))
  }

  processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
