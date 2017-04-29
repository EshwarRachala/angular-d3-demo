import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { D3Service, D3 } from '../d3';

@Component({
  selector: 'app-grpd-barchart',
  templateUrl: './grpd-bar-chart.component.html',
  styleUrls: ['./grpd-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GrpdBarchartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 60, left: 50, right: 20 };
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
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
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = this.d3service.getSvg(element);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

  }

  updateChart() {
  }
}
