import { Component, Input, OnInit, Optional, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() public menuFor!: TemplateRef<MenuComponent>;

  @ViewChild('viewContainerRef', {read: ViewContainerRef}) public viewContainerRef!: ViewContainerRef;

  constructor(@Optional() private parent?: MenuComponent) {}

  ngOnInit(): void {
  }

  public onClick() {
    console.log('parent:', this.parent);
    this.addTemplateToContainer(this.menuFor);
  }

  addTemplateToContainer(template: TemplateRef<MenuComponent>) {
    this.viewContainerRef.createEmbeddedView(template);
  }

  public get containerCssClass() : string {
    return this.isRoot()
      ? 'button__container--root'
      : 'button__container--leaf';
  }

  isLeaf() : boolean {
    return !this.isRoot() && !this.hasNestedSubMenu();
  }

  hasNestedSubMenu() : boolean {
    return !!this.menuFor;
  }

  isRoot() : boolean {

   return this.parent?.name ? false : true ;
  }

}

