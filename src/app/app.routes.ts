import { SimpleLineChartComponent } from './components/simple-line/simpleline.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { Routes } from '@angular/router';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';
import { HMBChartComponent } from './components/hor-mul-bar/hmb.component';
import { MultiBarChartComponent } from './components/multi-bar/bar.component';


export const ROUTES: Routes =
  [
    { path: '', component: HMBChartComponent },
    { path: 'HMBchart', component: HMBChartComponent },
    { path: 'MultiBar', component: MultiBarChartComponent },
    { path: 'bulletchart', component: BulletChartComponent },
    { path: 'SimpleLine', component: SimpleLineChartComponent },
    { path: 'barchart', component: BarChartComponent },
    { path: '*', component: HMBChartComponent }
  ];
