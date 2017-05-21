
import { Component, OnInit } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  selector: 'app-scattered-bubble-chart',
  template: `<div class="gallery with-transitions" id="chart1">
                <svg height="500"></svg>
             </div>`
})
export class ScatteredBubbleChartComponent implements OnInit {
  private nv: any;
  private d3: any;
  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();

    this.data = sinAndCos();


    function sinAndCos() {
      const sin = [], sin2 = [],
        cos = [];

      // Data is represented as an array of {x,y} pairs.
      for (let i = 0; i < 100; i++) {
        sin.push({ x: i, y: Math.sin(i / 10) });
        sin2.push({ x: i, y: Math.sin(i / 10) * 0.25 + 0.5 });
        cos.push({ x: i, y: .5 * Math.cos(i / 10) });
      }

      // Line chart data should be sent as an array of series objects.
      return [
        {
          values: sin,      // values - represents the array of {x,y} data points
          key: 'Sine Wave', // key  - the name of the series.
          color: '#ff7f0e'  // color - optional: choose your own line color.
        },
        {
          values: cos,
          key: 'Cosine Wave',
          color: '#2ca02c'
        },
        {
          values: sin2,
          key: 'Another sine wave',
          color: '#7777ff',
          area: true      // area - set to true if you want this line to turn into a filled area chart.
        }
      ];
    }
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;

    const chart = nv.models.lineChart()
      .options({
        duration: 300,
        useInteractiveGuideline: true
      })
      ;
    chart.xAxis
      .axisLabel('Time (s)')
      .tickFormat(d3.format(',.1f'))
      .staggerLabels(true)
      ;
    chart.yAxis
      .axisLabel('Voltage (v)')
      .tickFormat(function (d) {
        if (d == null) {
          return 'N/A';
        }
        return d3.format(',.2f')(d);
      })
      ;

    d3.select('#chart1 svg')
      .datum(this.data)
      .call(chart);


    nv.utils.windowResize(chart.update);
  }

}
