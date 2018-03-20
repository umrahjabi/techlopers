import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public constructor(private titleService: Title,private route: Router  ) { }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  
  mobileapp():void
    {
      this.route.navigate(['Mobile_App_Development']);
    } 
    webdev():void
    {
      this.route.navigate(['Web_Development']);
    } 
    ERPSoft():void
    {
      this.route.navigate(['ERP_Software_Solution']);
    } 
    DigitalM():void
    {
      this.route.navigate(['Digital_Marketing']);
    } 
    SEO():void
    {
      this.route.navigate(['SEO']);
    } 
    finance():void
    {
      this.route.navigate(['Finance_CFO']);
    } 
    lss():void
    {
      this.route.navigate(['LSS']);
    } 
    training():void
    {
      this.route.navigate(['training']);
    } 
    whyus():void
    {
      this.route.navigate(['whyUs']);
    } 
    service():void
    {
      this.route.navigate(['services']);
    } 
    partner():void
    {
      this.route.navigate(['partner']);
    } 
    contact():void
    {
      this.route.navigate(['contact']);
    } 
    
}
