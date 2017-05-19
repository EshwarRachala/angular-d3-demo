import { Component, OnInit } from '@angular/core';
import { ChartService } from '@angular/nvd3';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.component.html'
})

export class DemoComponent implements OnInit {
  private nv: any;
  constructor(private srvc: ChartService) {
    this.nv = srvc.getnvD3();
    // tslint:disable-next-line:no-debugger
    debugger;
  }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    // debugger;
  }
}
