import { Component, OnInit } from '@angular/core';
import { ChartService } from 'ngnvd3';

@Component({
  selector: 'app-scattered-bubble-chart',
  template: `<div class="gallery with-transitions" id="chart">
                <svg height="500"></svg>
             </div>`
})
export class ScatteredBubbleChartComponent implements OnInit {
  private nv: any;
  private d3: any;

  constructor(private service: ChartService) {
    this.nv = service.getnvD3();
    this.d3 = service.getD3();
  }

  ngOnInit() {
    const nv = this.nv;
    const d3 = this.d3;

 const chart = nv.models.scatterChart()
                .showDistX(true)
                .showDistY(true)
                .transitionDuration(350)
                .color(d3.scale.category10().range());


    // Axis settings
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    // We want to show shapes other than circles.
    chart.scatter.onlyCircles(false);

    const myData = randomData(4, 40);

    d3.select('#chart svg')
    .datum(myData)
    .call(chart);

    nv.utils.windowResize(chart.update);

    function randomData(groups, points) {
       const data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

      for (let i = 0; i < groups; i++) {
        data.push({ key: 'Group ' + i, values: [] });
      }

       for (let j = 0; j < points; j++) {
            data[i].values.push({
              x: random()
            , y: random()
            , size: Math.random()
            , shape: (Math.random() > 0.95) ? shapes[j % 6] : 'circle'
            });
      }

      return data;
    }
  }
}
