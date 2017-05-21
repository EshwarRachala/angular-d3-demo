import { Component, OnInit } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  moduleId: module.id,
  selector: 'app-stacked-grouped-multi-bar',
  template: `<div class="gallery with-transitions" id="chart1">
              <svg height="600"></svg>
            </div>`
})
export class StackedGroupedMultiBarComponent implements OnInit {
  private nv: any;
  private d3: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;

    const chart = nv.models.multiBarChart();

    chart.xAxis
      .tickFormat(d3.format(',f'));

    chart.yAxis
      .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
      .datum(exampleData())
      .call(chart);

    nv.utils.windowResize(chart.update);

    function exampleData() {
      // tslint:disable-next-line:no-shadowed-variable
      return stream_layers(3, 10 + Math.random() * 100, .1).map(function (data, i) {
        return {
          key: 'Stream #' + i,
          values: data
        };
      });
    }

    function stream_layers(n, m, o) {
      // tslint:disable-next-line:curly
      if (arguments.length < 3) o = 0;
      function bump(a) {
        const x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (let i = 0; i < m; i++) {
          const w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function () {
        // tslint:disable-next-line:prefer-const
        let a = [], i;
        // tslint:disable-next-line:curly
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        // tslint:disable-next-line:curly
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
      });

      function stream_index(d, i) {
        return { x: i, y: Math.max(0, d) };
      }
    }


  }
}
