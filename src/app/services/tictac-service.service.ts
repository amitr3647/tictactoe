import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictacServiceService {
@Output() resetGameEvent = new EventEmitter<any>();
  constructor() { }

  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  checkWinner(activePlayer: any,cellData: any){
  return this.winningCombinations.some((winningComb)=>{
    return winningComb.every((index)=>{
      return cellData[index] == activePlayer;
    })
   })
  }
  checkDraw(cellData: any){
return cellData.every((value: any)=>value!= '');
  }

  resetGame(){
    this.resetGameEvent.emit();
  }

}
