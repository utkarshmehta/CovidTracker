import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorldDataComponent } from './world-data/world-data.component';
//import { ChartService } from './charts/charts.service'
import { HttpClientModule } from '@angular/common/http';
import { WorldDataService } from './world-data/word-data.service';
import { CountryDataComponent } from './country-data/country-data.component';
import { CountryDataService} from './country-data/country-data.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    WorldDataComponent,
    CountryDataComponent,
    NavigationBarComponent,
   // ChartService,
   //
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    
  ],
  providers: [WorldDataService,CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
