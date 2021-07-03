import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { data } from '../assets/data.js'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showing:boolean = false

  data = data

  toogleG() {

    this.showing = false

  }

  toogleL() {

    this.showing = true

  }

  votes = [];

  ngOnInit() {

    var ago = [];
    var agoM = [];
    var agoY = []; 
    var results = [];
    var voted = [];
    var hasVoted: string;
    

    for (var index:number = 0; index < data.length; index++) {
      
      ago[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400));

      agoM[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400 * 30));

      agoY[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400 * 30 * 12));      

      results[index]= {'positive': data[index].votes.positive, 'negative': data[index].votes.negative}

      hasVoted = localStorage.getItem('hasVoted'+index);

      if (hasVoted == "positive") {

        results[index].positive = results[index].positive + 1

        voted[index]="true"
        
      } else if (hasVoted == "negative") {

        results[index].negative = results[index].negative + 1

        voted[index]="true"

      }
      
      else {
        
        voted[index]= "false";

      }
      
      
    }

  return { results, ago, agoM, agoY, voted}
    
  }

  final = this.ngOnInit()

  onPositive(index:number) {

    var up = document.getElementById("up"+index);
    var down = document.getElementById("down"+index);
    var sub = document.getElementById("sub"+index) as HTMLInputElement

    up.classList.add("active")

    if (down.classList.contains("active")){

      down.classList.remove("active")

    }

    if (sub.disabled = true) {
      
      sub.disabled = false;

    }
    

  }

  onNegative(index:number){

    var up = document.getElementById("up"+index);
    var down = document.getElementById("down"+index);
    var sub = document.getElementById("sub"+index) as HTMLInputElement

    down.classList.add("active")

    if (up.classList.contains("active")){

      up.classList.remove("active")

    }

    if (sub.disabled = true) {
      
      sub.disabled = false;

    }

  }

  onSubmit(index:number) {
    
    this.final.voted[index] = "true";

    var up = document.getElementById("up"+index);

    if (up.classList.contains("active")){ 

      this.final.results[index].positive = this.final.results[index].positive + 1
      localStorage.setItem('hasVoted'+index, 'positive');

    }

    else {

      this.final.results[index].negative = this.final.results[index].negative + 1 
      localStorage.setItem('hasVoted'+index, 'negative');

    }

  }

  undoVote(index:number) {

    this.final.voted[index] = "false";

    var hasVoted = localStorage.getItem('hasVoted' + index)

    if (hasVoted == "positive") {

      this.final.results[index].positive = this.final.results[index].positive - 1 
      
    } else {

      this.final.results[index].negative = this.final.results[index].negative - 1 
      
    }

    localStorage.removeItem('hasVoted' + index);

  }
}