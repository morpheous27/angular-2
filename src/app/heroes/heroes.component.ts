import { Component, OnInit } from '@angular/core';
import { Hero} from './Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = { id : 1 , name : 'WindStorm'};
  heroes = HEROES;
  selectedHero : Hero;
  constructor() {
    }

    onSelect(sHero : Hero) : void
    {
      this.selectedHero = sHero;
    }

  ngOnInit() {
    console.log('this is after component creation.')
  }
}
