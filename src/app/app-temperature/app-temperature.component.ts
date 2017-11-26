import { Component, OnInit, Input } from '@angular/core';
import { AppForecastService } from '../app-forecast.service';
import { count } from 'rxjs/operators/count';

@Component({
  selector: 'app-temperature',
  templateUrl: './app-temperature.component.html',
  styleUrls: ['./app-temperature.component.css']
})
export class AppTemperatureComponent implements OnInit {
  @Input()
  weatherForecast: Array<{}> = [];
  temperatureForecast = [];
  forecastDate = [];
  forecastOptionsSet = {
    temperature : {
      propertySet: 'avgtemp_c',
      dataArray: []
    },
    humidity : {
      propertySet: 'avghumidity',
      dataArray: [] 
    },
    wind : {
      propertySet: 'maxwind_mph',
      dataArray: [] 
    }
  };
  constructor(private appForecastService: AppForecastService) { };

  ngOnInit() {
    this.getForecastData();
  }

  private convertDayFormat(dateString): string {
    let dday = new Date (dateString);
    let locale = "en-us";
    let options = { day: 'numeric', month: 'long'};
    let convertedDate = dday.toLocaleString(locale, options);
    return convertedDate;
  }

  private setForecastDays(dayData) {
    let countDay;
    if (dayData.hasOwnProperty('date')) {
      countDay = dayData['date'];
      this.forecastDate.push(this.convertDayFormat(countDay));
    }
  }

  private setForecastData(dayData, params) {
    let currentDateData;
    Object.keys(params).forEach(optionName => {
      if (dayData.hasOwnProperty('day') && dayData['day'].hasOwnProperty(params[optionName].propertySet)) {
        currentDateData = dayData['day'][params[optionName].propertySet];
        params[optionName].dataArray.push(currentDateData);
      }
    });
  }

  /*
  private setForecastTemperature(dayData) {
    let currentDateData;
    if (dayData.hasOwnProperty('day') && dayData['day'].hasOwnProperty('avgtemp_c')) {
        currentDateData = dayData['day']['avgtemp_c'];
        this.temperatureForecast.push(currentDateData);
    }
  } */

  private getForecastData() {
    console.log(this.weatherForecast);

    this.weatherForecast.forEach(element => {
      this.setForecastDays(element);
      //this.setForecastTemperature(element);

      this.setForecastData(element, this.forecastOptionsSet);
    });
    console.log(this.forecastDate);
    // console.log(this.temperatureForecast);
    console.log(this.forecastOptionsSet);
  }

}
