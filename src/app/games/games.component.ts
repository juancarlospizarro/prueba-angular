import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavoriteGame = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteGame.emit(gameName);
  }
  
  games = [
    {
    id: 1,
    name: "Grand Thef Auto V"
    },
    {
      id: 2,
      name: "FIFA 22"
    },
    {
      id: 3,
      name: "Red Dead Redemption 2"
    }
]
}
