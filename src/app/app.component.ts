import { D3Service, D3 } from './shared/d3.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
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
