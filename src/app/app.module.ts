import { StackedBarDemoComponent } from './components/stackedtogroupedbar/stackedbardemo.component';
import { BarDemoComponent } from './components/bardemo/bardemo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './container/app.component';
import { D3Service } from '../shared/d3';
import { BarchartComponent } from '../shared/bar-chart/bar-chart.component';
import { GrpdBarchartComponent } from './../shared/grpd-bar-chart/grpd-bar-chart.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BarDemoComponent,
    StackedBarDemoComponent,
    BarchartComponent,
    GrpdBarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
