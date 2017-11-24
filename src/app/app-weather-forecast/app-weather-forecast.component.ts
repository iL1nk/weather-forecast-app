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
  cityNameInput : string;
  countryName : string;
  todayDate : string;
  formCityName : string;
  formTemperature : number;
  formCurCondition : string;
  formImgUrlCondition : string;
  loadingFlag : Boolean;
  constructor(private appForecastService: AppForecastService) { }

  ngOnInit() {
    this.cityNameInput = 'Kiev';
    this.getForecastByCity();
    // this.getSample();
  }

  /*
  private getSample() {
    this.appForecastService.getForecastSample(this.sampleUrl).subscribe(data => {
      if (data) {
        this.responseData = data;
        console.log(this.responseData);
        console.log(this.responseData['name']);
        this.cityName = this.responseData['name'];
      }
    })
  }
  */

  private getForecastByCity() {
    this.loadingFlag = true;
    if(!this.cityNameInput) { return; }
    this.appForecastService.getForecast(this.cityNameInput).subscribe(data => {
      if (data) {
        console.log(data);
        this.responseData = data;
        this.cityName = data.location.name;
        this.countryName = data.location.country;
        this.todayDate = data.location.localtime;

        this.formCityName = `${this.cityName}, ${this.countryName}`;
        this.formTemperature = data.current.temp_c;
        this.formCurCondition = data.current.condition.text;
        this.formImgUrlCondition = data.current.condition.icon;

      }
      this.loadingFlag = false;
    })
  }

}
