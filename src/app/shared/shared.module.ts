import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CountToModule } from 'angular-count-to';
import { LightboxModule } from 'ngx-lightbox';
import { ModalVideoComponent } from './modal-video/modal-video.component';

import { FooterComponent } from './footer/footer.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewComponent } from './review/review.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { VideopopupDirective } from './videopopup.directive';
import { SafePipe } from './safe.pipe';
import { SertifComponent } from './sertif/sertif.component';
import { ZyxwvComponent } from './zyxwv/zyxwv.component';
import { JklpoComponent } from './jklpo/jklpo.component';
import { NmirfComponent } from './nmirf/nmirf.component';
import { AqwsdComponent } from './aqwsd/aqwsd.component';
import { KplumComponent } from './kplum/kplum.component';
import { QwertComponent } from './qwert/qwert.component';
import { YuiopComponent } from './yuiop/yuiop.component';
import { AsdfgComponent } from './asdfg/asdfg.component';
import { ZxcvbComponent } from './zxcvb/zxcvb.component';


@NgModule({
  declarations: [
    FooterComponent,
    SwitcherComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewComponent,
    PricingComponent,
    BlogComponent,
    ContactusComponent,
    NavbarComponent,
    TeamComponent,
    ModalVideoComponent,
    VideopopupDirective,
    SafePipe,
    SertifComponent,
    ZyxwvComponent,
    JklpoComponent,
    NmirfComponent,
    AqwsdComponent,
    KplumComponent,
    QwertComponent,
    YuiopComponent,
    AsdfgComponent,
    ZxcvbComponent,
   
  ],
  imports: [CommonModule, LightboxModule],
  exports: [
    FooterComponent,
    SwitcherComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewComponent,
    PricingComponent,
    BlogComponent,
    ContactusComponent,
    NavbarComponent,
    TeamComponent,
    VideopopupDirective,
    ModalVideoComponent,
    SafePipe
  ],
})
export class SharedModule { }
