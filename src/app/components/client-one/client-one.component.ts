import { Component } from '@angular/core';
import { faSwimmer, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-client-one',
  templateUrl: './client-one.component.html',
  styleUrls: ['./client-one.component.css']
})
export class ClientOneComponent {
  sharks = [
    "Great White",
    "Great hammerhead",
    "Angular roughshark",
    "Pyjama"
  ];

  safeSharks = ["Angular roughshark", "Pyjama"];

  getIconFunc =  (shark: string) =>  {
    const icon = this.safeSharks.indexOf(shark) >=0 ? faSwimmer : faSkullCrossbones;
    return icon;
  }
}
