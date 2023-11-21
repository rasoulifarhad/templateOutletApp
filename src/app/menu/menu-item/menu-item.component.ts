import { Component, Inject, Input, OnInit, Optional, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DOCUMENT } from '@angular/common';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() public menuFor!: TemplateRef<MenuComponent>;

  @ViewChild('viewContainerRef', {read: ViewContainerRef}) public viewContainerRef!: ViewContainerRef;

  constructor(
              @Inject(DOCUMENT) private documentRef: Document,
              private eventManager: EventManager,
              @Optional() private parent?: MenuComponent) {}

  private removeGlobalEventListener?: Function;

  ngOnInit(): void {
    console.log(this.documentRef.URL);
  }

  public onClick() {
    if (this.containerIsEmpty() ) {
      this.addHandlersForRootElement();
      this.closeAlreadyOpenedMenuInTheSameSubTree();
      this.registerOpenedMenu();
      this.addTemplateToContainer(this.menuFor);
    } else {
      this.removeClickOutsideListener();
      this.clearContainer();
    }
  }

  removeClickOutsideListener() {
    throw new Error('Method not implemented.');
  }

  addHandlersForRootElement() {
    if(this.isRoot()) {
      this.addClickOutsideListener();
    }
  }

  addClickOutsideListener() {
    // this.removeGlobalEventListener =  this.eventManager.addEventListener('window', 'click',this.closeMenuOnOutsideClick(this));
  }

  private closeMenuOnOutsideClick(target: any): void {
    console.log(target);
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

