import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.page.html',
  styleUrls: ['./view-home.page.scss'],
})
export class ViewHomePage implements OnInit {
  view: boolean;
  results1: any;

  constructor() { }

  ngOnInit() {
  }

  viewDetails(){
    this.view=true;
  console.log("clickeddddddddd")
    fetch('./assets/inputfile/input.json').then(res=>res.json()).then(
       json=>{
         console.log("results:",json)
         this.results1=json;
        } );
  
        
   }
}
