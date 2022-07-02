import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { ICurrentWeather } from '../../inerfaces/interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.currentWeather$.subscribe(
      (data) => (this.current = data)
    );
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();

    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '';
  }
}
