import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [

  ],
    imports: [
        CommonModule,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        FormsModule
    ],
  exports:[
      ListPokemonComponent,
      DetailPokemonComponent,
      BorderCardDirective,
      PokemonTypeColorPipe,
  ]
})
export class PokemonModule { }
