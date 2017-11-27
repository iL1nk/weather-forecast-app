import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatButtonModule, MatFormFieldModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppWeatherForecastComponent } from './app-weather-forecast/app-weather-forecast.component';
import { AppTemperatureComponent } from './app-temperature/app-temperature.component';
import { AppForecastService } from './app-forecast.service';
// import { JsonpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppChartComponent } from './app-chart/app-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWeatherForecastComponent,
    AppTemperatureComponent,
    AppChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatProgressSpinnerModule, MatToolbarModule,
    FormsModule,
    HttpModule,
    // JsonpModule
    ChartsModule
  ],
  providers: [AppForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
