import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '6f1ba99fc6e63d69ff3e3e2eec1c3844';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: String): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
