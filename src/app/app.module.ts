import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ChartModule, ChartService } from 'ngnvd3';

import { AppComponent } from './container/app.component';
import { LineBarChartComponent } from './components/Line-bar/line-bar.component';
import { LineViewFinderChartComponent } from './components/LineView/lineview.component';
import { StackedAreaComponent } from './components/stacked-area/stackedarea.component';
import { StackedGroupedMultiBarComponent } from './components/stacked-grouped-multi-bar/stacked-grouped-multi-bar';
import { SimpleLineChartComponent } from './components/simple-line/simpleline.component';
import { HorMultiBarChartComponent } from './components/hor-multi-bar/hmb.component';
import { VerMultiBarChartComponent } from './components/ver-mul-bar/vmb.component';
import { DiscreteBarChartComponent } from './components/discrete-bar-chart/discrete-bar-chart.component';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';
import { CumulativeLineComponent } from './components/cumulative-line/cumulative-line.component';
import { PieChartComponent } from './components/pie-chart/pie.component';
import { ScatteredBubbleChartComponent } from './components/scattered-bubble/scattered-bubble.component';
import { CandleStickChartComponent } from './components/candleStick/candle-stick.component';
import { BoxPlotComponent } from './components/boxplot/boxplot.component';
import { OhlcChartComponent } from './components/Ohlc/ohlc.component';
import { SunBurstComponent } from './components/Sunburst/sunburst.componet';
import { ForceComponent } from './components/force/force.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletChartComponent,
    DiscreteBarChartComponent,
    VerMultiBarChartComponent,
    HorMultiBarChartComponent,
    SimpleLineChartComponent,
    StackedGroupedMultiBarComponent,
    StackedAreaComponent,
    LineViewFinderChartComponent,
    CumulativeLineComponent,
    PieChartComponent,
    LineBarChartComponent,
    ScatteredBubbleChartComponent,
    CandleStickChartComponent,
    BoxPlotComponent,
    OhlcChartComponent,
    SunBurstComponent,
    ForceComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ChartModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }
