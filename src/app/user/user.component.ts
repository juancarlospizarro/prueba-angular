import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "juancarlos"
  isLoggedIn = true
  favGame = "";

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

   fotoPerfil(){
    alert("Esta es tu foto de perfil")
   }

}
