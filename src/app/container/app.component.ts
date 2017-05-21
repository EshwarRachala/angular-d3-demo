import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Charts';

  private links = {
    MutltiBar: ['/HMBchart'],
    HorMultiBar: ['/MultiBar'],
    stackgroupedmultibar: ['/stackgroupedmultibar'],
    DiscreteBar: ['/barchart'],
    SimpleLine: ['/SimpleLine'],
    stackedarea: ['/stackedarea'],
    cumulativeline: ['/cumulativeline'],
    viewfinder: ['/viewfinder'],
    bulletchart: ['/bulletchart'],
    linebar: ['/linebar'],
    pie: ['/pie'],
    scatteredbbl: ['/scatteredbbl']
  }

}
