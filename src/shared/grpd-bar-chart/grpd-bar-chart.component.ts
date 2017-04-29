import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { D3Service, D3 } from '../d3';

@Component({
  selector: 'app-grpd-bar-chart',
  templateUrl: './grpd-bar-chart.component.html',
  styleUrls: ['./grpd-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GroupedBarchartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 60, left: 50, right: 20 };
  private chart: any;
  private width: number;
  private height: number;
  private x0: any;
  private x1: any;
  private y: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
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

    const keys = Object.keys(this.data[0]).splice(1);

    // define X & Y domains
    const x0Domain = this.data.map(d => d.state);

    const yDomain: any = [0,
      d3.max(this.data, function (d) {
        return d3.max(keys, function (key) {
          return d[key];
        });
      })];
    // create scales
    this.x0 = d3.scaleBand().paddingInner(0.1).domain(x0Domain)
      .rangeRound([0, this.width]);
    this.x1 = this.d3.scaleBand()
      .padding(0.05).domain(keys).rangeRound([0, this.x0.bandwidth()]);

    this.y = this.d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = this.d3.scaleOrdinal().range(<any[]>['#98abc5', '#8a89a6', '#7b6888', '#6b486b',
      '#a05d56', '#d0743c', '#ff8c00']);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x0')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(this.d3.axisBottom(this.x0));

    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(this.d3.axisLeft(this.y).ticks(null, 's'))
      .append('text')
      .attr('x', 2)
      .attr('y', this.y(this.y.ticks().pop()) + 0.5)
      .attr('dy', '0.32em')
      .attr('fill', '#000')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start')
      .text('Population');
  }

  updateChart() {
    // update scales & axis
    // this.x0.domain(this.data.map(d => d[0]));
    // this.y.domain([0, this.d3.max(this.data, d => d[1])]);
    // this.colors.domain([0, this.data.length]);
    // this.xAxis.transition().call(this.d3.axisBottom(this.xScale));
    // this.yAxis.transition().call(this.d3.axisLeft(this.yScale));

    // const update = this.chart
    //   .selectAll('.bar')
    //   .data(this.data);

    // // remove exiting bars
    // update.exit().remove();

    // update existing bars
    // this.chart.selectAll('.bar')
    //   .transition()
    //   .attr('x', d => this.xScale(d[0]))
    //   .attr('y', d => this.yScale(d[1]))
    //   .attr('width', d => this.xScale.bandwidth())
    //   .attr('height', d => this.height - this.yScale(d[1]))
    //   .style('fill', (d, i) => this.colors(i));

    // add new bars
    // update
    //   .enter()
    //   .append('rect')
    //   .attr('class', 'bar')
    //   .attr('x', d => this.xScale(d[0]))
    //   .attr('y', d => this.yScale(0))
    //   .attr('width', this.xScale.bandwidth())
    //   .attr('height', 0)
    //   .style('fill', (d, i) => this.colors(i))
    //   .transition()
    //   .delay((d, i) => i * 10)
    //   .attr('y', d => this.yScale(d[1]))
    //   .attr('height', d => this.height - this.yScale(d[1]));
  }
}
