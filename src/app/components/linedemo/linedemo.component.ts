import { D3Service, D3 } from '@angular/d3';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-line-demo',
  templateUrl: './linedemo.component.html',
  styleUrls: ['./linedemo.component.css']
})

export class LineDemoComponent implements OnInit {
  private d3: D3;
  private chartData: Array<any>;

  constructor(private d3service: D3Service) {
    this.d3 = d3service.getD3();
  }
  ngOnInit() {
    // setTimeout(() => {
    //   this.generateData();
    //   setInterval(() => this.generateData(), 3000);
    // }, 1000);
  }

  generateData() {
    this.chartData = [];

    for (let i = 0; i < 100; i++) {
      this.chartData.push({x: i, y: Math.sin(i /  10)});
    }
  }
}
