import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular D3 components';

  private links = {
    MutltiBar: ['/HMBchart'],
    HorMultiBar: ['/MultiBar'],
    stackgroupedmultibar: ['/stackgroupedmultibar'],
    DiscreteBar: ['/barchart'],
    SimpleLine: ['/SimpleLine'],
    stackedarea: ['/stackedarea'],
    bulletchart: ['/bulletchart'],
  }

}
