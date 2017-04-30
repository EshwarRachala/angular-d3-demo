import { D3Service, D3 } from '../../../shared/d3';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stacked-bar-demo',
  templateUrl: './stackedbardemo.component.html',
  styleUrls: ['./stackedbardemo.component.css']
})

export class StackedBarDemoComponent implements OnInit {
  title = 'Angular D3 components';
  private d3: D3;
  private chartData: Array<any>;

  constructor(private d3service: D3Service) {
    this.d3 = d3service.getD3();
  }
  ngOnInit() {
     this.chartData =
      [
        {
          state: 'CA', 'Under 5 Years': 2704659, '5 to 13 Years': 5464895, '14 to 17 Years': 5869489,
          '18 to 24 Years': 52439857, '25 to 44 Years': 539476895, '45 to 64 Years': 824374682, '65 Years and Over': 92384923234
        }
      ]


  }

}
