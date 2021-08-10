import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  city = '';
  temperature = 0;
  humidity = 0;
  climate = '';
  query = false;
  loading = false;
  showError = false;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather() {
    this.query = false;
    this.loading = true;

    this._weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.loading = false;
        this.query = true;
        this.temperature = data.main.temp - 273;
        this.humidity = data.main.humidity;
        this.climate = data.weather[0].main;
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.errorWeather();
      }
    );
  }

  errorWeather() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000);
  }
}
