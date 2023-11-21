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
    if (this.containerIsEmpty() ) {
      this.closeAlreadyOpenedMenuInTheSameSubTree();
      this.registerOpenedMenu();
      this.addTemplateToContainer(this.menuFor);
    } else {
      this.clearContainer();
    }
  }

  registerOpenedMenu() {
    if(this.parent) {
      this.parent.registerMenuItem(this);
    }
  }

  closeAlreadyOpenedMenuInTheSameSubTree() {
    if(this.parent) {
      this.parent.closeOpenedMenuIfExists();
    }
  }

  private containerIsEmpty() : boolean{
    return this.viewContainerRef.length === 0;
  }


  public clearContainer() : void {
    this.viewContainerRef.clear();
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

