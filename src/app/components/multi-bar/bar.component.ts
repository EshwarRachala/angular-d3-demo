import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  moduleId: module.id,
  selector: 'app-multi-bar-chart',
  template: '<div class="gallery with-transitions" id="chart1"><svg height="600"></svg></div>'
})
export class MultiBarChartComponent implements OnInit {
  private nv: any;
  private d3: any;

  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
    this.data = [
      {
        'key': 'Series 1',
        'color': '#d67777',
        'values': [
          {
            'label': 'Group A',
            'value': -1.8746444827653
          },
          {
            'label': 'Group B',
            'value': -8.0961543492239
          },
          {
            'label': 'Group C',
            'value': -0.57072943117674
          },
          {
            'label': 'Group D',
            'value': -2.4174010336624
          },
          {
            'label': 'Group E',
            'value': -0.72009071426284
          },
          {
            'label': 'Group F',
            'value': -0.77154485523777
          },
          {
            'label': 'Group G',
            'value': -0.90152097798131
          },
          {
            'label': 'Group H',
            'value': -0.91445417330854
          },
          {
            'label': 'Group I',
            'value': -0.055746319141851
          }
        ]
      },
      {
        'key': 'Series 2',
        'color': '#4f99b4',
        'values': [
          {
            'label': 'Group A',
            'value': 25.307646510375
          },
          {
            'label': 'Group B',
            'value': 16.756779544553
          },
          {
            'label': 'Group C',
            'value': 18.451534877007
          },
          {
            'label': 'Group D',
            'value': 8.6142352811805
          },
          {
            'label': 'Group E',
            'value': 7.8082472075876
          },
          {
            'label': 'Group F',
            'value': 5.259101026956
          },
          {
            'label': 'Group G',
            'value': 0.30947953487127
          },
          {
            'label': 'Group H',
            'value': 0
          },
          {
            'label': 'Group I',
            'value': 0
          }
        ]
      }
    ];
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;
    const chart = nv.models.multiBarHorizontalChart()
      .x(function (d) { return d.label })
      .y(function (d) { return d.value })
      .margin({ top: 30, right: 20, bottom: 50, left: 175 })
      .showValues(true)
      .showControls(true);

    chart.yAxis
      .tickFormat(d3.format(',.2f'));

    d3.select('#chart1 svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);
  }
}
