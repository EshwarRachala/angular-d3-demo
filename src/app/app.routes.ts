import { Routes } from '@angular/router';
import { BarDemoComponent } from './components/bardemo/bardemo.component';
import { StackedBarDemoComponent } from './components/stackedtogroupedbar/stackedbardemo.component';


export const ROUTES: Routes =
  [
    { path: '', component: BarDemoComponent },
    { path: 'barchart', component: BarDemoComponent },
    { path: 'stackedtogroupedbar', component: StackedBarDemoComponent },
    { path: '*', component: BarDemoComponent },

  ];
