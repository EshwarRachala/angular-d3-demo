import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  moduleId: module.id,
  selector: 'app-bar-chart',
  template: '<div class="gallery with-transitions" id="chart1"><svg height="500"></svg></div>'
})
export class DiscreteBarChartComponent implements OnInit {
  private nv: any;
  private d3: any;

  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label': 'A',
            'value': 29.765957771107
          },
          {
            'label': 'B',
            'value': 0
          },
          {
            'label': 'C',
            'value': 32.807804682612
          },
          {
            'label': 'D',
            'value': 196.45946739256
          },
          {
            'label': 'E',
            'value': 0.19434030906893
          },
          {
            'label': 'F',
            'value': 98.079782601442
          },
          {
            'label': 'G',
            'value': 13.925743130903
          },
          {
            'label': 'H',
            'value': 5.1387322875705
          }
        ]
      }
    ];
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;

    const chart = nv.models.discreteBarChart()
      .x( d => d.label)
      .y( d => d.value)
      .staggerLabels(true)
      .showValues(true)
      .showXAxis(true)
      .showYAxis(true)
      // .tooltips(true)
      .duration(250);

    // nv.models.tooltip(false);

    chart.options({
      showXAxis: false,
      tooltips: false
    })

    chart.options = nv.utils.optionsFunc.bind(chart);




    d3.select('#chart1 svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);
  }
}
