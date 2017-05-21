import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-cumulative-line-chart',
  template: `<div class="gallery with-transitions" id="chart1">
                <svg height="500"></svg>
             </div>`
})
export class CumulativeLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
