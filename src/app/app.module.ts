import { LineViewFinderChartComponent } from './components/LineView/lineview.component';
import { StackedAreaComponent } from './components/stacked-area/stackedarea.component';
import { StackedGroupedMultiBarComponent } from './components/stacked-grouped-multi-bar/stacked-grouped-multi-bar';
import { SimpleLineChartComponent } from './components/simple-line/simpleline.component';
import { MultiBarChartComponent } from './components/multi-bar/bar.component';
import { HMBChartComponent } from './components/hor-mul-bar/hmb.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './container/app.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ChartModule, ChartService } from 'ngnvd3';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';
import { CumulativeLineComponent } from './components/cumulative-line/cumulative-line.component';
import { PieChartComponent } from './components/pie-chart/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletChartComponent,
    BarChartComponent,
    HMBChartComponent,
    MultiBarChartComponent,
    SimpleLineChartComponent,
    StackedGroupedMultiBarComponent,
    StackedAreaComponent,
    LineViewFinderChartComponent,
    CumulativeLineComponent,
    PieChartComponent
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
