import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartModule, ChartService } from 'ngnvd3';

@Component({
  selector: 'app-bullet-chart',
  template: `<div class="gallery with-transitions" id="chart"></div>`
})

export class BulletChartComponent implements OnInit {
  private nv: any;
  private d3: any;
  private height: number;
  private width: number;
  private margin = { top: 5, right: 40, bottom: 20, left: 120 };

  private data = [
    {
      'title': 'Revenue', 'subtitle': 'US$, in thousands',
      'ranges': [150, 225, 300], 'measures': [220], 'markers': [250],
      'markerLines': [270]
    },
    {
      'title': 'Satisfaction', 'subtitle': 'out of 5',
      'ranges': [3.5, 4.25, 5], 'measures': [3.2, 4.0],
      'markers': [4.4], 'markerLines': [3.8]
    },
    {
      'title': 'Order Size', 'subtitle': 'US$, average',
      'ranges': [350, 500, 600], 'measures': [100], 'markers': [550],
      'markerLines': [530]
    }
  ];

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
  }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    //  debugger;
    this.height = 80;
    this.width = 1200;

    const chart = this.nv.models.bulletChart();

    const vis = this.d3.select('#chart')
      .selectAll('svg')
      .data(this.data)
      .enter()
      .append('svg')
      .attr('class', 'bullet nvd3')
      .attr('width', this.width)
      .attr('height', this.height);


    vis.transition().duration(1000).call(chart);
  }
}
