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
import { KjmopComponent } from './kjmop/kjmop.component';
import { ZsdrtComponent } from './zsdrt/zsdrt.component';
import { QxzawComponent } from './qxzaw/qxzaw.component';
import { PoiuyComponent } from './poiuy/poiuy.component';
import { KjhgfComponent } from './kjhgf/kjhgf.component';
import { LkjhgComponent } from './lkjhg/lkjhg.component';
import { HgbvcComponent } from './hgbvc/hgbvc.component';
import { RtyuiComponent } from './rtyui/rtyui.component';
import { CvbnmComponent } from './cvbnm/cvbnm.component';
import { MnbvcComponent } from './mnbvc/mnbvc.component';
import { QazwsComponent } from './qazws/qazws.component';
import { XdfghComponent } from './xdfgh/xdfgh.component';
import { ErtyuComponent } from './ertyu/ertyu.component';
import { UytrfComponent } from './uytrf/uytrf.component';
import { AqxwsComponent } from './aqxws/aqxws.component';
import { WerzxComponent } from './werzx/werzx.component';


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
    KjmopComponent,
    ZsdrtComponent,
    QxzawComponent,
    PoiuyComponent,
    KjhgfComponent,
    LkjhgComponent,
    HgbvcComponent,
    RtyuiComponent,
    CvbnmComponent,
    MnbvcComponent,
    QazwsComponent,
    XdfghComponent,
    ErtyuComponent,
    UytrfComponent,
    AqxwsComponent,
    WerzxComponent,
   
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
