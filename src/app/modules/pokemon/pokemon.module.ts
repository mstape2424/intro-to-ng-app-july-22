import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTeamMemberComponent } from './pokemon-team-member/pokemon-team-member.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';

export const pokemonRoutes: Routes = [
  {
    path: '',
    component: PokemonComponent,
  }
]

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonTeamMemberComponent,
    PokemonDetailComponent,
    PokemonTeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
