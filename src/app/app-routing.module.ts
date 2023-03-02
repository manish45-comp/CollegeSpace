import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaimpageComponent } from './maimpage/maimpage.component';
import { MainContactComponent } from './main-contact/main-contact.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home' ,component:MaimpageComponent},
  {path:'howitwork' ,component:HowItWorksComponent},
  {path:'contactus' ,component:MainContactComponent},
  {path:'aboutus',component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
