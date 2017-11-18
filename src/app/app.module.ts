import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatButtonModule, MatFormFieldModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppWeatherForecastComponent } from './app-weather-forecast/app-weather-forecast.component';
import { AppTemperatureComponent } from './app-temperature/app-temperature.component';


@NgModule({
  declarations: [
    AppComponent,
    AppWeatherForecastComponent,
    AppTemperatureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatProgressSpinnerModule, MatToolbarModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
