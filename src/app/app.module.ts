import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [HttpClientModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
