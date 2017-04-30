import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { D3Service, D3 } from '../d3';

@Component({
  selector: 'app-grpd-barchart',
  templateUrl: './grpd-bar-chart.component.html',
  styleUrls: ['./grpd-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GrpdBarchartComponent implements OnInit, OnChanges {
  value: string;
  @ViewChild('chart') private chartContainer: ElementRef;
  @ViewChild('radio') private radioContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 60, left: 50, right: 20 };
  private chart: any;
  private width: number;
  private height: number;
  private n = 4;
  private m = 58;
  private xScale: d3.ScaleBand<string>;
  private yScale: d3.ScaleLinear<number, number>;
  private xz: any;
  private yz: any;
  private yMax: any;
  private y01z: any;
  private y1Max: any;
  private color: any;
  private xAxis: any;
  private yAxis: any;
  private rect: any;
  private timeout: d3.Timer;
  private d3service: D3Service;
  private d3: D3;

  constructor(private d3Service: D3Service) {
    this.d3service = d3Service;
    this.d3 = d3Service.getD3();
  }

  ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    const d3 = this.d3;
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = this.d3service.getSvg(element);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);


    this.xz = d3.range(this.m);
    this.yz = d3.range(this.n).map(() => this.bumps(this.m));

    const range: any = d3.range(this.n);
    const transpose: any = d3.transpose(this.yz);

    this.y01z = d3.stack().keys(range)(this.yz, (z: any) => d3.transpose(z));
    this.yMax = d3.max(this.yz, (y: any) => d3.max(y));
    this.y1Max = d3.max(this.y01z, (y: any) => d3.max<any>(y, d => d[1]));

    this.xScale = d3.scaleBand()
      .domain(this.xz)
      .rangeRound([0, this.width])
      .padding(0.08);

    this.yScale = d3.scaleLinear()
      .domain([0, this.y1Max])
      .range([this.height, 0]);

    this.color = d3.scaleOrdinal()
      .domain(range)
      .range(d3.schemeCategory20c);

    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left},
      ${this.margin.top + this.height})`)
      .call(this.d3.axisBottom(this.xScale)
        .tickSize(0).tickPadding(6));
  }

  updateChart() {
    const d3 = this.d3;
    this.xz = d3.range(this.m);

    this.yz = d3.range(this.n).map(() => this.bumps(this.m));

    this.xScale.domain(this.xz);
    this.yScale.domain([0, this.y1Max]);

    const range: any = d3.range(this.n);
    const transpose: any = d3.transpose(this.yz);

    this.y01z = d3.stack().keys(range)(this.yz, (z: any) => d3.transpose(z));
    this.yMax = d3.max(this.yz, (y: any) => d3.max(y));
    this.y1Max = d3.max(this.y01z, (y: any) => d3.max<any>(y, d => d[1]));

    this.xAxis.transition().call(
      d3.axisBottom(this.xScale)
        .tickSize(0).tickPadding(6));


    const series = this.chart.selectAll('.series')
      .data(this.y01z)
      .enter().append('g')
      .attr('fill', (d, i) => this.color(i));

    const rect = series.selectAll('rect')
      .data(function (d) { return d; })
      .enter().append('rect')
      .attr('x', (d, i) => this.xScale(i))
      .attr('y', this.height)
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0);

    rect.transition()
      .delay(function (d, i) { return i * 10; })
      .attr('y', d => this.yScale(d[1]))
      .attr('height', d => this.yScale(d[0]) - this.yScale(d[1]));

    const timeout = d3.timeout(function () {
      d3.select('input[value="grouped"]')
        .property('checked', true)
        .dispatch('change');
    }, 2000);

    // tslint:disable-next-line:
    d3.selectAll('input').on('change', changed);

    function changed() {
      timeout.stop();
      if (this.value === 'grouped') {
        Grouped();
      } else {
        Stacked();
      }
    }
    const yScale = this.yScale;
    const xScale = this.xScale;
    const yMax = this.yMax;
    const y1Max = this.y1Max;
    const n = this.n;

    function Grouped() {
      yScale.domain([0, yMax]);

      rect.transition()
        .duration(500)
        .delay(function (d, i) { return i * 10; })
        .attr('x',
        function (d, i) {
          return xScale(i) + xScale.bandwidth() /
            n * this.parentNode.__data__.key;
        })
        .attr('width', xScale.bandwidth() / n)
        .transition()
        .attr('y', function (d) { return yScale(d[1] - d[0]); })
        .attr('height', function (d) {
          return yScale(0) - yScale(d[1] - d[0]);
        });

    }

    function Stacked() {

      yScale.domain([0, y1Max]);

      rect.transition()
        .duration(500)
        .delay(function (d, i) { return i * 10; })
        .attr('y', function (d) { return yScale(d[1]); })
        .attr('height', function (d) { return yScale(d[0]) - yScale(d[1]); })
        .transition()
        .attr('x', function (d, i) { return xScale(i); })
        .attr('width', xScale.bandwidth());
    }

  }
  bumps(m) {
    const values = []
    let i, j, w, x, y, z;

    for (i = 0; i < m; ++i) {
      values[i] = 0.1 + 0.1 * Math.random();
    }

    for (j = 0; j < 5; ++j) {
      x = 1 / (0.1 + Math.random());
      y = 2 * Math.random() - 0.5;
      z = 10 / (0.1 + Math.random());
      for (i = 0; i < m; i++) {
        w = (i / m - y) * z;
        values[i] += x * Math.exp(-w * w);
      }
    }

    for (i = 0; i < m; ++i) {
      values[i] = Math.max(0, values[i]);
    }

    return values;
  }
}
