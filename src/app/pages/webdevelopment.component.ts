import { Component } from '@angular/core';

@Component({
  selector: 'service-list',
  templateUrl:'./servicepage.component.html'
})


export class WebComponent{
  servicename : string ="Web Development";
  serviceimage : string='assets/images/webdev.png';
}