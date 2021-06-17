import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { MapsComponent } from './maps/maps.component';

import { WeatherService } from './services/weather.service';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    HeaderComponent,
    WeatherComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MenubarModule,
    AutoCompleteModule,
    FormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
