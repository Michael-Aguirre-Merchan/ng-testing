import { Component, OnInit } from '@angular/core';
import { data } from '../assets/data.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showing:boolean = false

  data = data

  title = 'zemoga';

  ago1 = Math.round((new Date().getTime() - new Date(data[0].lastUpdated).getTime()) / (1000 * 86400));
  ago2 = Math.round((new Date().getTime() - new Date(data[1].lastUpdated).getTime()) / (1000 * 86400));
  ago3 = Math.round((new Date().getTime() - new Date(data[2].lastUpdated).getTime()) / (1000 * 86400));
  ago4 = Math.round((new Date().getTime() - new Date(data[3].lastUpdated).getTime()) / (1000 * 86400));
  ago5 = Math.round((new Date().getTime() - new Date(data[4].lastUpdated).getTime()) / (1000 * 86400));
  ago6 = Math.round((new Date().getTime() - new Date(data[5].lastUpdated).getTime()) / (1000 * 86400));

  ago = [ this.ago1, this.ago2, this.ago3, this.ago4, this.ago5, this.ago6 ]

  agoM = [ Math.round(this.ago1 / 30), 
    Math.round(this.ago2 / 30), 
    Math.round(this.ago3 / 30), 
    Math.round(this.ago4 / 30), 
    Math.round(this.ago5 / 30), 
    Math.round(this.ago6 / 30)
    ]

  agoY = [ Math.round(this.ago1 / (30 * 12)), 
    Math.round(this.ago2 / (30 * 12)), 
    Math.round(this.ago3 / (30 * 12)), 
    Math.round(this.ago4 / (30 * 12)), 
    Math.round(this.ago5 / (30 * 12)), 
    Math.round(this.ago6 / (30 * 12))
  ]
  total1:number =  data[0].votes.positive + data[0].votes.negative
  positive1 = data[0].votes.positive/this.total1 * 100
  negative1:number= data[0].votes.negative/this.total1 * 100
  
  total2 =  data[1].votes.positive + data[1].votes.negative
  positive2 = data[1].votes.positive/this.total2 * 100
  negative2= data[1].votes.negative/this.total2 * 100
  
  total3 =  data[2].votes.positive + data[2].votes.negative
  positive3 = data[2].votes.positive/this.total3 * 100
  negative3= data[2].votes.negative/this.total3 * 100

  total4 =  data[3].votes.positive + data[3].votes.negative
  positive4 = data[3].votes.positive/this.total4 * 100 
  negative4= data[3].votes.negative/this.total4 * 100 

  total5 =  data[4].votes.positive + data[4].votes.negative
  positive5 = data[4].votes.positive/this.total5 * 100
  negative5= data[4].votes.negative/this.total5 * 100

  total6 =  data[5].votes.positive + data[5].votes.negative
  positive6 = data[5].votes.positive/this.total6 * 100 
  negative6= data[5].votes.negative/this.total6 * 100


  results = [
    {"positive": Math.round(this.positive1), "negative": Math.round(this.negative1)},
    {"positive": Math.round(this.positive2), "negative": Math.round(this.negative2)},
    {"positive": Math.round(this.positive3), "negative": Math.round(this.negative3)},
    {"positive": Math.round(this.positive4), "negative": Math.round(this.negative4)},
    {"positive": Math.round(this.positive5), "negative": Math.round(this.negative5)},
    {"positive": Math.round(this.positive6), "negative": Math.round(this.negative6)}
  ]

  toogleG() {

    this.showing = false

  }

  toogleL() {

    this.showing = true

  }

  ngOnInit() {
    
  }
}