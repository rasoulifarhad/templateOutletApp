import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  s = new BehaviorSubject<MenuItem[] | undefined>([]);
  constructor() { }

  getFoods() : Observable<MenuItem[] | undefined> {
    return this.s.asObservable();
  }
}
