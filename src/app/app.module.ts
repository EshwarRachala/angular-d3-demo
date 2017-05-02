import { LineDemoComponent } from './components/linedemo/linedemo.component';
import { StackedBarDemoComponent } from './components/stackedtogroupedbar/stackedbardemo.component';
import { BarDemoComponent } from './components/bardemo/bardemo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './container/app.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { D3Module } from '@angular/d3';

@NgModule({
  declarations: [
    AppComponent,
    BarDemoComponent,
    StackedBarDemoComponent,
    LineDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    D3Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
