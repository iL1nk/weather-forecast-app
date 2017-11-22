import { Component, OnInit } from '@angular/core';
import { AppForecastService } from '../app-forecast.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-weather-card',
  templateUrl: './app-weather-forecast.component.html',
  styleUrls: ['./app-weather-forecast.component.css']
})
export class AppWeatherForecastComponent implements OnInit {

  responseData : {} = {};
  cityName : string;
  weatherMin : string;
  weatherMax : string;
  // sampleUrl: string = 'https://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1';
  sampleUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=London,GB&mode=json&units=metric&cnt=7&appid=c1ce723438fb796c33e45b5a92267e91'
  constructor(private appForecastService: AppForecastService) { }

  ngOnInit() {
    this.cityName = 'Lviv,UA';
    // this.getCityName();
    this.getSample();
  }

  private getSample() {
    console.log('111');
    this.appForecastService.getForecastSample(this.sampleUrl).subscribe(data => {
      if (data) {
        this.responseData = data;
        console.log(this.responseData);
        console.log(this.responseData['name']);
        this.cityName = this.responseData['name'];
      }
    })
  }

  private getCityName() {
    console.log('222');
    if(this.cityName) { return; }
    this.appForecastService.getWeather(this.cityName).subscribe(data => {
      if (data && data.city && data.city.name) {
        this.cityName = data.city.name;
      }
    })
  }

}
