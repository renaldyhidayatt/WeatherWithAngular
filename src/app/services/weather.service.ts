import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = 'be665555ac9a1636a085b7a69869a89c';
  constructor(private http: HttpClient) {}

  getWeather(a: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + a;
    return this.http.get(URL);
  }
}
