import { TictacServiceService } from './../../services/tictac-service.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
@Input() winnerFound: any;
@Input() winner: any;
@Output() resetBoardEvent = new EventEmitter<any>();
constructor(
  private _gameService: TictacServiceService,
){}

onReset(){
 this._gameService.resetGame();
}
}
