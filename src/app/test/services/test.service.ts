import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

const arr = [1, 2, 3];
const mappedArr = arr.map( value => value + 1);
// Array.prototype.map = function(projectionFn) {
//   let retVal = [];
//   for (let i = 0; i < this.length; i++) {
//     retVal.push(projectionFn(this[i]))

//   }
//   return retVal;
// }
const filteredArr = arr.filter( v => v% 2 === 0);
Array.prototype.filter = function(predicateFn: any) {
    let retVal = [];
    for (let i = 0; i < this.length; i++) {
      if(predicateFn(this[i])) {
        retVal.push(this[i]);
      }
    }
    return retVal;
}

const arr2 = [1, 2, 3, 4, 5];
const  composeArr = arr2.map( x => x + 1).filter( y => y% 2 === 0);

const gameData = [
  {
    title: 'Mega Man 2',
    bosses: [
      {
        name: 'Bubble Man',
        weapon: 'Bubble Beam'
      },
      {
        name: 'Metal Man',
        weapon: 'Metal Blade'
      }]
  },
  {
    title: 'Mega Man 3',
    bosses: [
      {
        name: 'Gemini Man',
        weapon: 'Gemini Laser'
      },
      {
        name: 'Top Man',
        weapon: 'Top Spin'
      }]
  }
];

const bossesArr = gameData.map( game => {
  return game.bosses;
})

function flatten(arr: Array<any>) : Array<any> {
  let retVal: Array<any> = [];
  arr.forEach( a => {
    retVal = retVal.concat(a);
  });
  return retVal;
}
// Array.prototype.flatten = function() {
//   let retVal: Array<any> = [];
//   this.forEach( a => {
//     retVal = retVal.concat(a);
//   });
//   return retVal;
// }
// const bossesArr2 = gameData.map( game => {
//   return game.bosses;
// }).flatten();

Array.prototype.flatMap = function(fn) {
  return  flatten(this.map(fn));
}

const bossesArr2 = gameData.flatMap( game => {
  return game.bosses;
});

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor() { }

  filteAndMap() {
    let favoriteMovies = [
      { title: 'The Breakfast Club', year: 1986, director: 'John Hughes',
        cast: [ 'Ally Sheedy', 'Emilio Estevez', 'Judd Nelson']
      },
      { title: 'ferris buellers day off', year: 1987, director: 'John Hughes',
        cast: [ 'Matthew Broderick', 'Mia Sara', 'Alan Ruck']
      },
      { title: 'Wargames', year: 1983, director: 'John Badham',
      cast: [ 'Matthew Broderick','Ally Sheedy']
      }
    ];


    let filteredAndMappedArray = [];

    for ( let i = 0; i < favoriteMovies.length; i++) {
      if (favoriteMovies[i].director === "John Hughes") {
        let mapped = {
          name: favoriteMovies[i].title,
          year: favoriteMovies[i].year
        };

        filteredAndMappedArray.push(mapped);
      }
    }

    favoriteMovies.filter(movie => movie.director === "John Hughes")
              .map(movie => ({name: movie.title, year: movie.year}));
  }
}

class Subject {

  callbacks: any[];
  constructor() {
    this.callbacks = [];
  }

  subscribe(fn: any) {
     this.callbacks.push(fn);
  }

  publish(data: any) {
     this.callbacks.forEach(fn => fn(data));
  }

  public static main() : void {
    // usage
    const subject = new Subject();
    const observer1 = (data: any) => console.log(`Observer1 received data: ${data}`);

    subject.subscribe(observer1);

    setTimeout(() => {
      subject.publish('test data');
    }, 1000);

  }

  private test1() {

    const observer = {
      next: (val: any) => { console.log(`onNext: ${val}`); },
      error: (err: any) => { console.log(`onError: ${err}`); },
      completed: () => { console.log(`onCompleted`); }
    };

    const su : Subscription = of(1, 2, 3).subscribe(observer);
    su.unsubscribe();

  }
}
