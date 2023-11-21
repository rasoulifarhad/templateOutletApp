import { Component, HostBinding, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @HostBinding('style.display') public display = 'inline-block';
  @HostBinding('style.position') public position = 'absolute';

  @Input() name!: string;

  private activateMenuIUtem?: MenuItemComponent ;

  public registerMenuItem(menuItem: MenuItemComponent) : void {
    this.activateMenuIUtem = menuItem;
  }

  public closeOpenedMenuIfExists() : void {
    if(this.activateMenuIUtem) {
      this.activateMenuIUtem.clearContainer();
    }
  }
}
