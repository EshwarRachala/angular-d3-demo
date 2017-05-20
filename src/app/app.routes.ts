import { Routes } from '@angular/router';
import { BulletChartComponent } from './components/bullet-chart.component';


export const ROUTES: Routes =
  [
    { path: '', component: BulletChartComponent },
    { path: 'bulletchart', component: BulletChartComponent },
    { path: '*', component: BulletChartComponent },

  ];
