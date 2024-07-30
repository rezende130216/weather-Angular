import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDataInput!: WeatherData;
  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
