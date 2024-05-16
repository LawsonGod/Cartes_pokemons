import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BorderCardDirective} from "../border-card.directive";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";

@Component({
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet, RouterLink],
  selector: 'app-detail-pokemon',
  standalone: true,
  styles: ``,
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

}

