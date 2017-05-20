import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { Routes } from '@angular/router';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';


export const ROUTES: Routes =
  [
    { path: '', component: BulletChartComponent },
    { path: 'bulletchart', component: BulletChartComponent },
    { path: 'barchart', component: BarChartComponent },
    { path: '*', component: BulletChartComponent },

  ];
