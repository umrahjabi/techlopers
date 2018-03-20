import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { WhyUsComponent } from './pages/whyUs.component';
import { ServicesComponent } from './pages/services.component';
import { MobileAppComponent } from './pages/mobileApp.component';
import { WebComponent } from './pages/webdevelopment.component';
import { ERPSoftwareComponent } from './pages/ERPsoftware.component';
import { DigitalComponent } from './pages/digitalmarketing.component';
import { SEOComponent } from './pages/SEO.component';
import { FinanceComponent } from './pages/finance.component';
import { LSSComponent } from './pages/lss.component';
import { MoreLSSComponent } from './pages/morelss.component';
import { ITServicesComponent } from './pages/itservices.component';
import { TrainingComponent } from './pages/training.component';
import { PartnerComponent } from './pages/partner.component';
import { ContactComponent } from './pages/contact.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutComponent,WhyUsComponent,ServicesComponent,MobileAppComponent,WebComponent,ERPSoftwareComponent,DigitalComponent,SEOComponent,FinanceComponent,LSSComponent,MoreLSSComponent,ITServicesComponent,TrainingComponent,PartnerComponent,ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'whyUs',component:WhyUsComponent},
      {path:'services',component:ServicesComponent},
      {path:'Mobile_App_Development',component:MobileAppComponent},
      {path:'Web_Development',component:WebComponent},
      {path:'ERP_Software_Solution',component:ERPSoftwareComponent},
      {path:'Digital_Marketing',component:DigitalComponent},
      {path:'SEO',component:SEOComponent},
      {path:'Finance_CFO',component:FinanceComponent},
      {path:'LSS',component:LSSComponent},
      {path:'morelss',component:MoreLSSComponent},
      {path:'IT_Services',component:ITServicesComponent},
      {path:'training',component:TrainingComponent},
      {path:'partner',component:PartnerComponent},
      {path:'contact',component:ContactComponent},
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
