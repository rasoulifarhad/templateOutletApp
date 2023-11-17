import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templateoutlet-example',
  templateUrl: './ng-templateoutlet-example.component.html',
  styleUrls: ['./ng-templateoutlet-example.component.css']
})
export class NgTemplateoutletExampleComponent {
  myContext = { $implicit: 'World', localSk : 'Svet'}
}
