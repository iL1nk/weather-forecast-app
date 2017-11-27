import { Component, OnInit } from '@angular/core';
import { AppForecastService } from '../app-forecast.service';
// import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-weather-card',
  templateUrl: './app-weather-forecast.component.html',
  styleUrls: ['./app-weather-forecast.component.css']
})
export class AppWeatherForecastComponent implements OnInit {

  responseData: Array<{}> = [];
  cityName: string;
  cityNameInput: string;
  countryName: string;
  todayDate: string;
  formCityName: string;
  formTemperature: number;
  formCurCondition: string;
  formImgUrlCondition: string;
  footerCurrentWeather: {
    pressure: string,
    humidity: string,
    cloud: string,
    windSpeed: string
  } = {
    pressure: '',
    humidity: '',
    cloud: '',
    windSpeed: '',
  };
  loadingFlag: Boolean;
  constructor(private appForecastService: AppForecastService) { }

  ngOnInit() {
    this.cityNameInput = 'Kiev';
    this.getCurrentWeatherByCity();
  }

  private setAppFormData(weatherData): void {
    this.cityName = weatherData.location.name;
    this.countryName = weatherData.location.country;
    this.todayDate = weatherData.location.localtime;

    this.formCityName = `${this.cityName}, ${this.countryName}`;
    this.formTemperature = weatherData.current.temp_c;
    this.formCurCondition = weatherData.current.condition.text;
    this.formImgUrlCondition = weatherData.current.condition.icon;

    this.footerCurrentWeather.pressure = weatherData.current.pressure_mb;
    this.footerCurrentWeather.humidity = weatherData.current.humidity;
    this.footerCurrentWeather.windSpeed = `${weatherData.current.wind_mph} mph`;
    this.footerCurrentWeather.cloud = `${weatherData.current.cloud} %`;
  }

  private saveTempForecast(forecastArray): void {
    this.responseData = forecastArray;
  }

  private getCurrentWeatherByCity() {
    this.loadingFlag = true;
    if (!this.cityNameInput) { return; }
    this.appForecastService.getForecast(this.cityNameInput).subscribe(data => {
      if (data) {
        console.log(data);

        this.setAppFormData(data);
        if (data.forecast && data.forecast.forecastday.length) {
          this.saveTempForecast(data.forecast.forecastday);
        }
      }
      this.loadingFlag = false;
    });
  }

}
