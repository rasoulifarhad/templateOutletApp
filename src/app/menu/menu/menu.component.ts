import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @HostBinding('style.display') public display = 'inline-block';
  @HostBinding('style.position') public position = 'absolute';
}
