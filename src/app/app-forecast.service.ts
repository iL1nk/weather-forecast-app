import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { JsonpModule, Jsonp, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http/src/http';

// current - https://api.apixu.com/v1/current.json?key=a7cc8ad2eec5461da9394902172311&q=Toronto
// forecast - https://api.apixu.com/v1/forecast.json?key=a7cc8ad2eec5461da9394902172311&q=Toronto&days=10
// url = https://api.apixu.com/v1/forecast.json?key=
// key = a7cc8ad2eec5461da9394902172311
// city = &q=Toronto
// days = &days=10
@Injectable()
export class AppForecastService {
    searchForecastUrl: string = 'https://api.apixu.com/v1/forecast.json?';
    searchWeatherUrl: string = 'https://api.apixu.com/v1/current.json?';
    daysQuantity: string = '10';
    apiKey: string = 'a7cc8ad2eec5461da9394902172311';

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    getForecast (cityName: string) {
        if (!cityName) {
            cityName = '';
        }
        return this.http.get(
            this.searchForecastUrl
            + 'key=' + this.apiKey
            + '&q=' + cityName
            + '&days=' + this.daysQuantity
            )
            .map(this.extractData);
    }

    getForecastSample (apiUrl: string):Observable<Response> {
        return this.http.get(apiUrl).map(res =>
          {
            if(res.ok) {
              return res.json() as Response;
            } else {
                // Error
            }
          }
        );
    }
}