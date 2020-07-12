import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorldDataComponent } from './world-data/world-data.component';
//import { ChartService } from './charts/charts.service'
import { HttpClientModule } from '@angular/common/http';
import { WorldDataService } from './world-data/word-data.service'

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    WorldDataComponent,
   // ChartService,
   //
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [WorldDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
