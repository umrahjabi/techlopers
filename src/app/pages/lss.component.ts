import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'service-list',
  templateUrl:'./lss.component.html'
})


export class LSSComponent{
  servicename : string ="Leased Service Sharing";

  constructor(private route: Router) {}

  lssmore():void
    {
      this.route.navigate(['morelss']);
    } 
 
}