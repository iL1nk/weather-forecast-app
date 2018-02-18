import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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

    // constructor(private http: Http) { }
    constructor(private httpClient: HttpClient) { }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    getForecast (cityName: string) {
        if (!cityName) {
            cityName = '';
        }
        return this.httpClient.get(
            this.searchForecastUrl
            + 'key=' + this.apiKey
            + '&q=' + cityName
            + '&days=' + this.daysQuantity
            )
            .map(this.extractData);
    }

    getObservableForecast (cityName: string): Observable<Response> {
        return this.httpClient.get(this.searchForecastUrl
            + 'key=' + this.apiKey
            + '&q=' + cityName
            + '&days=' + this.daysQuantity
            ).map((res: Response) => res);
    }
}
