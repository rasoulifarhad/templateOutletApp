import { Component } from '@angular/core';
import { faSkullCrossbones, faSwimmer } from '@fortawesome/free-solid-svg-icons';

export interface Shark {
  name: string;
  latinName: string;
  status: string;
}

@Component({
  selector: 'app-client-two',
  templateUrl: './client-two.component.html',
  styleUrls: ['./client-two.component.css']
})
export class ClientTwoComponent {

  sharks: Shark[] = [
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

  tractors = [
    {name : "tractor1", img : "assets/rractor.png", stars: 3},
    {name : "tractor2", img : "assets/rractor.png", stars: 5},
    {name : "tractor3", img : "assets/rractor.png", stars: 1},

  ]
  safeSharks = ["Angular roughshark", "Pyjama"];

  appendFunc =  (shark : Shark) => {
    return `${shark.name} (${shark.latinName})`;
  }

  getIconFunc =  (shark: Shark) =>  {
    const icon = this.safeSharks.indexOf(shark.name) >=0 ? faSwimmer : faSkullCrossbones;
    return icon;
  }

}
