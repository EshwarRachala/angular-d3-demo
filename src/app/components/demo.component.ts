import { Component, OnInit } from '@angular/core';
import { D3Service } from '@angular/nvd3';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.component.html'
})

export class DemoComponent implements OnInit {
  private nv: any;
  constructor(private srvc: D3Service) {
    this.nv = srvc.getnv();
    // tslint:disable-next-line:no-debugger
    debugger;
  }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    // debugger;
  }
}
