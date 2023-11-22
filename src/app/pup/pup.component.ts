import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pup',
  templateUrl: './pup.component.html',
  styleUrls: ['./pup.component.css']
})
export class PupComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  whoAmI() {
    return 'I am a pup component!';
  }
}
