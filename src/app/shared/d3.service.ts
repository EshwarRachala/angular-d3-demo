import { Injectable } from '@angular/core';
import * as d3 from './bundle-d3';

export type D3 = typeof d3;

@Injectable()
export class D3Service {

  private htmlelement: HTMLElement;
  private width: any;
  private height: any;
  constructor() { }

  public getD3(): D3 {
    return d3;
  }

  public getSvg(element: HTMLElement) {
    this.htmlelement = element;
    this.width = this.htmlelement.clientWidth;
    this.height = this.htmlelement.clientWidth * 0.5;

    const svg = d3.select(this.htmlelement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .call(this.responsify);
  }

  private responsify(svg: any) {
    const container = d3.select(svg.node().parentNode);

    // tslint:disable-next-line:radix
    this.width = parseInt(svg.style('width'));
    // tslint:disable-next-line:radix
    this.height = parseInt(svg.style('height'));

    const aspect = (this.width / this.height);

    svg.attr('viewBox', '0 0 ' + this.width + ' ' + this.height)
      .attr('preserveAspectRatio', 'xMinYMid')
      .call(resize);

    d3.select(window).on('resize.' + container.attr('id'), resize);

    function resize() {
      // tslint:disable-next-line:radix
      const targetWidth = parseInt(container.style('width'));
      svg.attr('width', targetWidth);
      svg.attr('height', Math.round(targetWidth / aspect));
    }
  }

}
