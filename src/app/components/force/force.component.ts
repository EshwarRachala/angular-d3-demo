import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  selector: 'app-force-chart',
  template: '<div class="gallery with-transitions" id="chart1"><svg height="600"></svg></div>'
})
export class ForceComponent implements OnInit {
  private nv: any;
  private d3: any;

  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;
    const chart = nv.models.discreteBarChart()
      .x(function (d) { return d.label })
      .y(function (d) { return d.value })
      .staggerLabels(true)
      .showValues(true)
      .duration(250);

    d3.select('#chart1 svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);
  }
}

