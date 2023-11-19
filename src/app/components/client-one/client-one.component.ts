import { Component } from '@angular/core';
import { faSwimmer, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import { Shark } from '../client-two/client-two.component';
@Component({
  selector: 'app-client-one',
  templateUrl: './client-one.component.html',
  styleUrls: ['./client-one.component.css']
})
export class ClientOneComponent {
  sharks = [
    {
      name: "Great White",
      latinName: "Carcharodon carcharias",
      status: "Vunerable",
    },
    {
      name: "Great hammerhead",
      latinName: "Sphyrna mokarran",
      status: "Endangered",
    },
    {
      name: "Angular roughshark",
      latinName: "Oxynotus centrina",
      status: "Vunerable",
    },
    {
      name: "Pyjama",
      latinName: "Poroderma africanum",
      status: "Near Threatend",
    },
  ];

  safeSharks = ["Angular roughshark", "Pyjama"];

  selectedShark: Shark = {} as Shark;

  appendFunc =  (shark : Shark) => {
    return `${shark.name} (${shark.latinName})`;
  }


  getIconFunc =  (shark: Shark) =>  {
    const icon = this.safeSharks.indexOf(shark.name) >=0 ? faSwimmer : faSkullCrossbones;
    return icon;
  }
}
