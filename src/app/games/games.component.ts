import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [UserComponent],
  template: `
    <h3>These are the favorite games of {{username}}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()

  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName)
  }

  games = [
    { id: 1, name: 'GOW' },
    { id: 2, name: 'BloodBorne' },
    { id: 3, name: 'LOL' },
  ];
}
