import { Component, OnInit } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  selector: 'app-pie-chart',
  template: `<div class="mdl-grid items">
              <div class="mdl-cell mdl-cell--6-col" id="chart">
                <svg height="500"></svg>
              </div>
               <div class="mdl-cell mdl-cell--5-col" id="chart1">
                  <svg height="500"></svg>
              </div>
              </div>`
})
export class PieChartComponent implements OnInit {
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

    const chart = nv.models.pieChart()
      .x(function (d) { return d.label })
      .y(function (d) { return d.value })
      .showLabels(true)
      .labelThreshold(.05);

    d3.select('#chart svg')
      .datum(exampleData())
      .transition().duration(350)
      .call(chart);


    const chart1 = nv.models.pieChart()
      .x(function (d) { return d.label })
      .y(function (d) { return d.value })
      .showLabels(true)     // Display pie labels
      .labelThreshold(.05)  // Configure the minimum slice size for labels to show up
      .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     // Configure how big you want the donut hole size to be.
      ;

    d3.select('#chart1 svg')
      .datum(exampleData())
      .transition().duration(350)
      .call(chart1);

    function exampleData() {
      return [
        {
          'label': 'One',
          'value': 29.765957771107
        },
        {
          'label': 'Two',
          'value': 0
        },
        {
          'label': 'Three',
          'value': 32.807804682612
        },
        {
          'label': 'Four',
          'value': 196.45946739256
        },
        {
          'label': 'Five',
          'value': 0.19434030906893
        },
        {
          'label': 'Six',
          'value': 98.079782601442
        },
        {
          'label': 'Seven',
          'value': 13.925743130903
        },
        {
          'label': 'Eight',
          'value': 5.1387322875705
        }
      ];
    }

  }

}
