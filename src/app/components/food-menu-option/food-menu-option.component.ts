import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MenuOption } from 'src/app/enums/menu-option';

@Component({
  selector: 'app-food-menu-option',
  templateUrl: './food-menu-option.component.html',
  styleUrls: ['./food-menu-option.component.css']
})
export class FoodMenuOptionComponent implements OnInit, OnDestroy{

  @Input()
  menuOptin = MenuOption.ALL;
  @Output()
  menuOptionSelected = new EventEmitter<string>;

  unsubscribe$ = new Subject<Boolean>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      option: new FormControl(this.menuOptin),
    });
    this.form.controls['option'].valueChanges
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((value: string) => this.menuOptionSelected.emit(value));
  }
}
