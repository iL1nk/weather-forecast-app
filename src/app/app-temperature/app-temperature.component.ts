import { Component, OnInit, Input } from '@angular/core';
import { AppForecastService } from '../app-forecast.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './app-temperature.component.html',
  styleUrls: ['./app-temperature.component.css']
})
export class AppTemperatureComponent implements OnInit {
  @Input()
  weatherForecast: Object[] = [];
  temperatureForecast: Object[] = [];
  constructor(private appForecastService: AppForecastService) { };

  ngOnInit() {
  }

  /*
  private getForecastByCity() {
    if(!this.cityNameInput) { return; }
    this.appForecastService.getForecast(this.cityNameInput).subscribe(data => {
      if (data) {
        console.log(data);

        this.setAppFormData(data);
        if (data.forecast && data.forecast.forecastday.length) {
          this.saveTempForecast(data.forecast.forecastday);
        }
      }
    })
  }
  */

}
