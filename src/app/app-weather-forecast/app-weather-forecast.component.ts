import { Component, OnInit } from '@angular/core';
import { AppForecastService } from '../app-forecast.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './app-weather-forecast.component.html',
  styleUrls: ['./app-weather-forecast.component.css']
})
export class AppWeatherForecastComponent implements OnInit {

  responseData : {};
  cityName : string;
  weatherMin : string;
  weatherMax : string;
  sampleUrl: string = 'http://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1';
  constructor(private appForecastService: AppForecastService) { }

  ngOnInit() {
    this.cityName = 'Lviv,UA';
    // this.getCityName();
    this.getSample();
  }

  private getSample() {
    this.appForecastService.getForecastSample(this.sampleUrl).subscribe(data => {
      if (data) {
        this.responseData = data;
      }
    })
  }
  /*
  private getCityName() {
    if(this.cityName) { return; }
    this.appForecastService.getWeather(this.cityName).subscribe(data => {
      if (data && data.city && data.city.name) {
        this.cityName = data.city.name;
      }
    })
  }
  */

}
