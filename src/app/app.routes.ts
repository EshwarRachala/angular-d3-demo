import { DemoComponent } from './components/demo.component';
import { Routes } from '@angular/router';


export const ROUTES: Routes =
  [
    { path: '', component: DemoComponent },
    { path: 'demo', component: DemoComponent },
    { path: '*', component: DemoComponent },

  ];
