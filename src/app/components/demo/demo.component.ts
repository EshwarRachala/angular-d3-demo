import { ChartConfig } from 'ngnvd3';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<button (click)="click($event)">submit</button>
                <hmb-chart *ngIf="config" [(config)]="config"></hmb-chart>`
})
export class DemoComponent {
  public config: ChartConfig = <ChartConfig>{};

  constructor() {
    this.getconfig();
  }

  getconfig() {
    this.config = <ChartConfig>{};
    this.config.margin = { left: 100 };
    this.config.height = 500;
    this.config.data = [
      {
        'key': 'Series 1',
        'color': '#d67777',
        'values': [
          {
            'label': 'Group A',
            'value': -1.8746444827653
          },
          {
            'label': 'Group B',
            'value': -8.0961543492239
          },
          {
            'label': 'Group C',
            'value': -0.57072943117674
          },
          {
            'label': 'Group D',
            'value': -2.4174010336624
          },
          {
            'label': 'Group E',
            'value': -0.72009071426284
          },
          {
            'label': 'Group F',
            'value': -0.77154485523777
          },
          {
            'label': 'Group G',
            'value': -0.90152097798131
          },
          {
            'label': 'Group H',
            'value': -0.91445417330854
          },
          {
            'label': 'Group I',
            'value': -0.055746319141851
          }
        ]
      },
      {
        'key': 'Series 2',
        'color': '#4f99b4',
        'values': [
          {
            'label': 'Group A',
            'value': 25.307646510375
          },
          {
            'label': 'Group B',
            'value': 16.756779544553
          },
          {
            'label': 'Group C',
            'value': 18.451534877007
          },
          {
            'label': 'Group D',
            'value': 8.6142352811805
          },
          {
            'label': 'Group E',
            'value': 7.8082472075876
          },
          {
            'label': 'Group F',
            'value': 5.259101026956
          },
          {
            'label': 'Group G',
            'value': 0.30947953487127
          },
          {
            'label': 'Group H',
            'value': 0
          },
          {
            'label': 'Group I',
            'value': 0
          }
        ]
      }
    ];
  }

  click(event) {
    this.getconfig();
    this.config.height = 600;
    event.preventDefault();
  }
}
