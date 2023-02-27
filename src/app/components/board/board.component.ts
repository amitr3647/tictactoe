import { TictacServiceService } from '../../services/tictac-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output() winningEvent = new EventEmitter<any>();
cellData = ['','','','','','','','',''];
xChance = true;
winnerFound: boolean = false;
activePlayer: any = 'X';
constructor(
  private _gameService: TictacServiceService,
){}

ngOnInit(): void {
  this._gameService.resetGameEvent.subscribe(res=>{
    this.checkWinner();
    this.resetBoard();
  })
}
onCellClick(cell: any,index: number){
if(!this.cellData[index]&& !this.winnerFound){
  console.log(cell,index)
this.cellData[index]=this.activePlayer;
//check for the winner.
this.checkWinner();
this.xChance=!this.xChance;
this.activePlayer = this.xChance?'X':'0';
console.log('adf')
}
}
checkWinner(){
  this.winnerFound = this._gameService.checkWinner(this.activePlayer,this.cellData)
  this.winningEvent.emit([this.winnerFound,this.activePlayer]);
}



resetBoard(){
  this.cellData = ['','','','','','','','',''];
  this.xChance = true;
  this.winnerFound = false;
  this.activePlayer = "X";
  
}
}
