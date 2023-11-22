import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SharkDirective } from './shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // title = 'templateOutletApp';

  extraCreature?: string

  @ViewChild('favoriteSeaCrerature')
  favoriteSeaCrerature!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.extraCreature);
  }

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
    this.favoriteSeaCrerature.nativeElement.value = 'Whale';
  }


}


