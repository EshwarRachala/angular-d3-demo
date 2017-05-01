import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular D3 components';

  private links = {
    barchart: ['/barchart'],
  //  linechart: ['/linechart'],
    stackedtogroupedbar: ['/stackedtogroupedbar']
  }

}
