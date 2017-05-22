import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  moduleId: module.id,
  selector: 'app-hmb-chart',
  template: '<svg class="gallery with-transitions" id="chart1" height="400"></svg>'
})
export class VerMultiBarChartComponent implements OnInit {
  private nv: any;
  private d3: any;
  private data: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();

    const d3 = this.d3;

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

    const test_data = stream_layers(3, 10 + Math.random() * 100, .1).map(function (data, i) {
      return {
        key: 'Stream' + i,
        values: data
      };
    });

    this.data = new d3.range(0, 3).map(function (d, i) {
      return {
        key: 'Stream' + i,
        values: new d3.range(0, 11).map(function (f, j) {
          return {
            y: 10 + Math.random() * 100 * (Math.floor(Math.random() * 100) % 2 ? 1 : -1),
            x: j
          }
        })
      };
    });

  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;
    const data = this.data;

    const chart = nv.models.multiBarChart()
      .barColor(d3.scale.category20().range())
      .transitionDuration(300)
      .reduceXTicks(true)
      .margin({ bottom: 100, left: 70 })
      .rotateLabels(45)
      .showControls(true)
      .groupSpacing(0.1);


   // chart.reduceXTicks(false).staggerLabels(true);

    chart.xAxis
      .axisLabel('ID of Furry Cat Households')
      .axisLabelDistance(35)
      .showMaxMin(false)
      .tickFormat(d3.format(',.6f'));
    ;
    chart.yAxis
      .axisLabel('Change in Furry Cat Population')
      .axisLabelDistance(-5)
      .tickFormat(d3.format(',.01f'));

    chart.dispatch.on('renderEnd', function () {
      nv.log('Render Complete');
    });
    d3.select('#chart1 svg')
      .datum(this.data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function (e) {
      nv.log('New State:', JSON.stringify(e));
    });
    chart.state.dispatch.on('change', function (state) {
      nv.log('state', JSON.stringify(state));
    });
    nv.log('hello');
    nv.utils.windowResize(chart.update);
  }
}
