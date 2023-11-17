import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, combineLatest, map, takeUntil } from 'rxjs';
import { MenuOption } from 'src/app/enums/menu-option';
import { Choice, MenuItem } from 'src/app/interfaces/menu-item';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit, OnDestroy{

  // data = {
  //   menuItems : [
  //     { question: 'Q1', choices: []},
  //     { question: 'Q2', choices: []},
  //   ],
  //   option : 'AVAILABLE'
  // };

  menuItem$?: Observable<{menuItems: MenuItem[], option : string} | undefined>

  menuOptionSub$ = new BehaviorSubject<string>(MenuOption.ALL);
  unsubscribe$ = new Subject<Boolean>();
  subscriptions: Subscription[] = [];

  menuItemTrackByFn(index: number, menuItem: MenuItem) : string | number {
    return menuItem ? menuItem.id : index;
  }

  choiceTrackByFn(index: number, choice: Choice) : string | number {
    return choice ? choice.id : index;
  }

  constructor(private foodService: FoodService) {}

  ngOnDestroy(): void {
  }

  filterMenuItems(menuItems: MenuItem[] | undefined, option: string ) : MenuItem[]{
    if (!menuItems) {
      return [];
    }
    return menuItems;

  }

  ngOnInit(): void {
    this.menuItem$ = combineLatest([
      this.foodService.getFoods(),
      this.menuOptionSub$
    ]).pipe(map(
      ([menuItems, option]) => {
        if(menuItems) {
          const filteredMenuItems = this.filterMenuItems(menuItems, option);
          return {
            menuItems: filteredMenuItems,
            option,
          }
        }
        return undefined;
      })
      , takeUntil(this.unsubscribe$));
  }
}
