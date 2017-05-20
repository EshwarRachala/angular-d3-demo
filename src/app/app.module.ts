import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './container/app.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ChartModule, ChartService } from 'ngnvd3';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
