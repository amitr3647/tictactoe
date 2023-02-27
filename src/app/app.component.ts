import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictac';
  zero: boolean = true;
  cross: boolean = false;
  cell1  = '';
  winnerFound: boolean = false;
  winner: string='';
  onCellClick(){
    console.log('cell clicked');
    if(this.cross){
this.cell1 = '0';
    }else{
      this.cell1 = 'X';
    }
  }

  winningEvent(event: any){
    console.log(event)
this.winnerFound = event[0];
this.winner = event[1];
  }

}
