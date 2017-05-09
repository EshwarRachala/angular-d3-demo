import { D3Service, D3 } from '@angular/d3';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-multi-bar',
  templateUrl: './multibar.component.html'
})

export class MultiBarComponent implements OnInit {
  private d3: D3;
  private chartData: Array<any>;

  constructor(private d3service: D3Service) {
    this.d3 = d3service.getD3();
  }
  ngOnInit() {

  }
}
