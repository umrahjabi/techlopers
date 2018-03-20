import { Component } from '@angular/core';

@Component({
  selector: 'service-list',
  templateUrl:'./servicepage.component.html'
})


export class MobileAppComponent{
  servicename : string ="Mobile App Development";
  serviceimage : string='assets/images/mobileapp.png';
}