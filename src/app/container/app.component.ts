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
    viewfinder: ['/viewfinder'],
    bulletchart: ['/bulletchart'],
  }

}
