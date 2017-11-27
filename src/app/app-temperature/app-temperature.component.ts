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
  forecastOptionsSet = [
    {
      name: 'Temperature',
      propertySet: 'avgtemp_c',
      dataArray: []
    },
    {
      name: 'Humidity',
      propertySet: 'avghumidity',
      dataArray: []
    },
    {
      name: 'Wind',
      propertySet: 'maxwind_mph',
      dataArray: []
    }
  ];
  isForecastSuccessful: Boolean = false;
  constructor(private appForecastService: AppForecastService) { };

  ngOnInit() {
    this.getForecastData();
  }

  private convertDayFormat(dateString): string {
    const dday = new Date (dateString);
    const locale = 'en-us';
    const options = { day: 'numeric', month: 'long'};
    const convertedDate = dday.toLocaleString(locale, options);
    return convertedDate;
  }

  private setForecastDays(dayData): void {
    let countDay;
    if (dayData.hasOwnProperty('date')) {
      countDay = dayData['date'];
      this.forecastDate.push(this.convertDayFormat(countDay));
    }
  }

  private setForecastData(dayData, params): void {
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
    // console.log(this.weatherForecast);
    if (this.weatherForecast && this.weatherForecast.length) {
      this.weatherForecast.forEach(element => {
        this.setForecastDays(element);
        // this.setForecastTemperature(element);
        this.setForecastData(element, this.forecastOptionsSet);
      });
      // console.log(this.forecastDate);
      // console.log(this.forecastOptionsSet);
      this.isForecastSuccessful = true;
    } else {
      this.isForecastSuccessful = false;
    }
  }

}
