import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { JsonpModule, Jsonp, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http/src/http';

// http://api.openweathermap.org/data/2.5/forecast/daily
//      ?q=London,GB
//      &mode=json
//      &units=metric
//      &cnt=16
//      &appid=f9bd74fe6caac71bf7d77985719e77e0
//      &appid=c1ce723438fb796c33e45b5a92267e91
// weather - http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&appid=f9bd74fe6caac71bf7d77985719e77e0
// sample - http://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1
@Injectable()
export class AppForecastService {
    searchForecastUrl: string = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    searchWeatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather?';
    cityKey: string = 'London,GB';
    unitsType: string = '&units=metric';
    modeType: string = '&mode=json';
    daysQuantity: string = '&cnt=5';
    apiKey: string = '&appid=f9bd74fe6caac71bf7d77985719e77e0';
    apiKeyDef: string = '&appid=c1ce723438fb796c33e45b5a92267e91';

    // _constructor(private jsonp: Jsonp) { }
    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    getWeather (cityName: string) {
        if (!cityName) {
            cityName = 'London,GB';
        }
        return this.http.get(
            this.searchForecastUrl 
            + '?q=' + cityName
            + this.unitsType
            + this.modeType
            + this.daysQuantity
            + this.apiKey
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

    // getForecastSample (apiUrl: string) {
        // if (this.http.get(this.sampleUrl)) {
            // return JSON.parse(this.http.get(this.sampleUrl));
        // }
        // return this.http.get(this.sampleUrl).map(this.extractData);
        // return this.http.get(this.sampleUrl).subscribe(this.extractJSONData);
    // }
}