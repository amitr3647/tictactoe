import { TictacServiceService } from '../../services/tictac-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output() winningEvent = new EventEmitter<any>();
  @Output() drawEvent = new EventEmitter<any>();
cellData = ['','','','','','','','',''];
xChance = true;
winnerFound: boolean = false;
isGameDraw:  boolean = false;
activePlayer: any = 'X';
constructor(
  private _gameService: TictacServiceService,
){}

ngOnInit(): void {
  this._gameService.resetGameEvent.subscribe(res=>{
    console.log('res after reset clicked',res)
    this.resetBoard();
    this.checkWinner();
    this.checkDraw();
  })
}
onCellClick(cell: any,index: number){
if(!this.cellData[index]&& !this.winnerFound){
  console.log(cell,index)
this.cellData[index]=this.activePlayer;
//check for the winner.
this.checkWinner();
//check for the draw when winner is not there
if(!this.winnerFound){
  this.checkDraw();
}
this.xChance=!this.xChance;
this.activePlayer = this.xChance?'X':'0';
console.log('adf')
}
}
checkWinner(){
  this.winnerFound = this._gameService.checkWinner(this.activePlayer,this.cellData)
  this.winningEvent.emit([this.winnerFound,this.activePlayer]);
}
checkDraw(){
  this.isGameDraw = this._gameService.checkDraw(this.cellData);
  console.log('isgamedraw',this.isGameDraw)
  this.drawEvent.emit(this.isGameDraw);
}


resetBoard(){
  this.cellData = ['','','','','','','','',''];
  this.xChance = true;
  this.winnerFound = false;
  this.activePlayer = "X";
  this.isGameDraw = false;
  
}
}
