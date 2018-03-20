import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'java-list',
  templateUrl:'./home.component.html'
})


export class HomeComponent{
  title : string ="Home Page";

  constructor(private route: Router) {}

  about():void
    {
      this.route.navigate(['about']);
    } 

}