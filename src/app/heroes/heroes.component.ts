import { Component, OnInit } from '@angular/core';
import { Hero} from './Hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from  '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  hero : Hero = { id : 1 , name : 'WindStorm'};
  heroes : Hero[];
  selectedHero : Hero;
  constructor(private heroService :HeroService) {
    }

    onSelect(sHero : Hero) : void
    {
      this.selectedHero = sHero;
    }

  ngOnInit() {
    console.log('this is after component creation.')
  }

  getHeroes() : Hero[]
  {
    return this.heroService.getHeroes();  
  }

}
