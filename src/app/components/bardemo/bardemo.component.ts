import { D3Service, D3 } from '../../../shared/d3';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bar-demo',
  templateUrl: './bardemo.component.html',
  styleUrls: ['./bardemo.component.css']
})

export class BarDemoComponent implements OnInit {
  title = 'Angular D3 components';
  private d3: D3;
  private chartData: Array<any>;

  constructor(private d3service: D3Service) {
    this.d3 = d3service.getD3();
  }
  ngOnInit() {
    setTimeout(() => {
      this.generateData();
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];

    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}
