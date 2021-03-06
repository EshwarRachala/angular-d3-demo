import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService, NV, D3 } from 'ngnvd3';

@Component({
  selector: 'app-box-plot-chart',
  template: `<div class="gallery with-transitions" id="chart1">
                <svg height="500"></svg>
             </div>`
})
export class BoxPlotComponent implements OnInit {
  private nv: NV;
  private d3: D3;
  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();

    this.data = [
      {
        label: 'Sample A',
        values: {
          Q1: 120,
          Q2: 150,
          Q3: 200,
          whisker_low: 115,
          whisker_high: 210,
          outliers: [50, 100, 225]
        },
      },
      {
        label: 'Sample B',
        values: {
          Q1: 300,
          Q2: 350,
          Q3: 400,
          whisker_low: 225,
          whisker_high: 425,
          outliers: [175]
        },
      },
      {
        label: 'Sample C',
        values: {
          Q1: 50,
          Q2: 100,
          Q3: 125,
          whisker_low: 25,
          whisker_high: 175,
          outliers: [0]
        },
      }
    ];
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;


    const chart = nv.models.boxPlotChart()
      .x(function (d) { return d.label })
      .staggerLabels(true)
      .maxBoxWidth(75) // prevent boxes from being incredibly wide
      .yDomain([0, 500]);

    d3.select('#chart1 svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);
  }
}

