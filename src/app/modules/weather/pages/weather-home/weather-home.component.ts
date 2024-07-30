import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCity = 'Londrina';
  weatherData!: WeatherData;
  serchIcon = faMagnifyingGlass
  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
   this.getWeatherData(this.initialCity);
  }

  getWeatherData(cityName: String): void {
    this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onSubmit():void{
    this.getWeatherData(this.initialCity);
    this.initialCity = '';
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
