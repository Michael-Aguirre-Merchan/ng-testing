import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { data } from '../assets/data.js'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showing: boolean = false

  data = data

  toogleG() {

    this.showing = false

  }

  toogleL() {

    this.showing = true

  }

  localVotes = [];

  ngOnInit() {

    var ago = [];
    var agoM = [];
    var agoY = [];
    var results = [];


    for (var index: number = 0; index < data.length; index++) {

      ago[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400));

      agoM[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400 * 30));

      agoY[index] = Math.round((new Date().getTime() - new Date(data[index].lastUpdated).getTime()) / (1000 * 86400 * 30 * 12));    

      this.localVotes[index] = {'Spos': 0, 'Sneg': 0, 'hasVoted': "false"}

      if (JSON.parse(localStorage.getItem('storage')) != null) {
        
        var storage = JSON.parse(localStorage.getItem('storage'));

        this.localVotes[index].Spos = storage[index].Spos;
        
        this.localVotes[index].Sneg = storage[index].Sneg;

        if (storage[index].hasVoted === "true") {
          
          this.localVotes[index].hasVoted = "true";
          
        } 
      }

      results[index] = { 'positive': data[index].votes.positive, 'negative': data[index].votes.negative }


    }

    return { results, ago, agoM, agoY}

  }

  final = this.ngOnInit()

  onPositive(index: number) {

    var up = document.getElementById("up" + index);
    var down = document.getElementById("down" + index);
    var sub = document.getElementById("sub" + index) as HTMLInputElement

    up.classList.add("active")

    if (down.classList.contains("active")) {

      down.classList.remove("active")

    }

    if (sub.disabled = true) {

      sub.disabled = false;

    }


  }

  onNegative(index: number) {

    var up = document.getElementById("up" + index);
    var down = document.getElementById("down" + index);
    var sub = document.getElementById("sub" + index) as HTMLInputElement

    down.classList.add("active")

    if (up.classList.contains("active")) {

      up.classList.remove("active")

    }

    if (sub.disabled = true) {

      sub.disabled = false;

    }

  }

  onSubmit(index: number) {

    var up = document.getElementById("up" + index);

    if (up.classList.contains("active")) {

      this.localVotes[index].Spos = this.localVotes[index].Spos + 1

    }
    else {

      this.localVotes[index].Sneg = this.localVotes[index].Sneg + 1

    }

    this.localVotes[index].hasVoted = "true";

    localStorage.setItem('storage', JSON.stringify(this.localVotes));

  }

  undoVote(index: number) {

    this.localVotes[index].hasVoted = "false";

    localStorage.setItem('storage', JSON.stringify(this.localVotes));

  }
}