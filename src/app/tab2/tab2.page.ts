import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
results:any;
results1:any;
view: boolean;
  username: any;
  email: any;
  phone: any;
  address: any;
  title: {};
  homeForm: FormGroup;


  constructor( public formBuilder: FormBuilder,
    public rfm: ReactiveFormsModule) {
      this.homeForm = this.formBuilder.group({
      username: [this.username]  ,                
      email: [this.email],
      phone: [this.phone],
      address: [this.address]
     
  })
}
 ngOnInit(){
   fetch('./assets/inputfile/input.json').then(res=>res.json()).then(
     json=>{
       console.log("results:",json)
       this.results=json;
      } );
 }



 viewDetails(id){
  this.view=true;
  
console.log("clickeddddddddd")

for(let item of this.results){
    id=item.id;
  this.username = item.username;
  this.email = item.email;
  this.phone = item.phone;
  this.address = item.address;
}


  // fetch('./assets/inputfile/input.json').then(res=>res.json()).then(
  //    json=>{
  //      console.log("results:",json)
  //      this.results1=json;
  //     } );

      
 }
  }


