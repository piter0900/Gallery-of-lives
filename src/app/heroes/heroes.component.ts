import { Component, OnInit } from '@angular/core';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  thumbnail="https://lh3.googleusercontent.com/W6P0tpWdeJpsukuey673Ro3NkMSRZsI9c-dZwMWnOPicREpIk664suvsIMMWkdY3sYln8sIgLJLFA0eLIaJS4u-mr26X06CDd_uh77HsRMtVA3aPViw2QL667zcYqSX7SEa2ZQaMXnVfn41dcxKxt6hkA6xmmecuk_xyvJCFeEcpxsC9EXyW-zi1NKVqwSiI9PISB0iat7MQdp8QdATe-GlOQn_cA-3rQQsEjnmvn8DmESvXv-DnqvCjHjGPW3867n-U1h13rn_5FtJsaXK3UAEvutcUr5FWyLZtuWyGxtcxmSH503u5-48uIJaMCpU6eEk29oZDcAI1109zjSaPmoXocybnFcESQLTPxOq38I38JpHrDMhh8p56EVKhmftJXejvwCQcTan5DTXjqX06zwecgjFueZGtS4RY_I-3rRnOQUNI_J2cuYvXbyZ-7ZOkLvzbL7_jS55eFZCoBN9gOURpIrQfdlOv5w_xR7VruicP2FB9Lb6vr76hTqXUdmnlXhaa_KFqYOQJ3vcs2y1F16P_bJWLRYCZI-6lsKFfhD34P0cCSQ3YvDnORw68AUGeJj9aDvyZ3l8wAk2ROX4uWWDQ8y4ZCgn2d29xNC0He8vj_1rBQW-1H5uLZFPGm6JEOaUSrGlVXjBQo-h80j-OT4oIYnqcgNY=w179-h103-no"

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
