import { Component } from '@angular/core';

@Component({
  selector: 'app-client-two',
  templateUrl: './client-two.component.html',
  styleUrls: ['./client-two.component.css']
})
export class ClientTwoComponent {

  sharks = [
    "Great White",
    "Great hammerhead",
    "Angular roughshark",
    "Pyjama"
  ];


  appendFunc =  (shark : string) => {
    return 'append-> ' + shark;
  }

}
