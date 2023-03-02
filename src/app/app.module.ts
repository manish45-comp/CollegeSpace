import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OffersComponent } from './offers/offers.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { DownloadfilesComponent } from './downloadfiles/downloadfiles.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './services/api.service';
import { FileDetailsComponent } from './file-details/file-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './interceptor/network.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaimpageComponent } from './maimpage/maimpage.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    OffersComponent,
    HowItWorksComponent,
    UploadfileComponent,
    DownloadfilesComponent,
    ReviewsComponent,
    ContactUsComponent,
    FooterComponent,
    FileDetailsComponent,
    MaimpageComponent,
    MainContactComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [ApiService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:NetworkInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
