import { Routes } from '@angular/router';
import { BarDemoComponent } from './components/bardemo/bardemo.component';
import { StackedBarDemoComponent } from './components/stackedtogroupedbar/stackedbardemo.component';
import { LineDemoComponent } from './components/linedemo/linedemo.component';


export const ROUTES: Routes =
  [
    { path: '', component: BarDemoComponent },
    { path: 'barchart', component: BarDemoComponent },
    { path: 'linechart', component: LineDemoComponent },
    { path: 'stackedtogroupedbar', component: StackedBarDemoComponent },
    { path: '*', component: BarDemoComponent },

  ];
