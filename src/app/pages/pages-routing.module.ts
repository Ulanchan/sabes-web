import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { IndexTwoComponent } from './index-two/index-two.component';
import { IndexThreeComponent } from './index-three/index-three.component';
import { IndexFourComponent } from './index-four/index-four.component';
import { IndexFiveComponent } from './index-five/index-five.component';
import { IndexSixComponent } from './index-six/index-six.component';
import { IndexSevenComponent } from './index-seven/index-seven.component';
import { IndexEightComponent } from './index-eight/index-eight.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { PortofolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { AboutComponent } from '../shared/about/about.component';
import { ServicesComponent } from '../shared/services/services.component';
import { PortfolioComponent } from '../shared/portfolio/portfolio.component';
import { ContactusComponent } from '../shared/contactus/contactus.component';
import { SertifComponent } from '../shared/sertif/sertif.component';
import { ZyxwvComponent } from '../shared/zyxwv/zyxwv.component';
import { JklpoComponent } from '../shared/jklpo/jklpo.component';
import { NmirfComponent } from '../shared/nmirf/nmirf.component';
import { AqwsdComponent } from '../shared/aqwsd/aqwsd.component';
import { KplumComponent } from '../shared/kplum/kplum.component';
import { QwertComponent } from '../shared/qwert/qwert.component';
import { YuiopComponent } from '../shared/yuiop/yuiop.component';
import { AsdfgComponent } from '../shared/asdfg/asdfg.component';
import { ZxcvbComponent } from '../shared/zxcvb/zxcvb.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'portfolio-detail',
    component: PortofolioDetailComponent
  },
  {
    path: 'certificate',
    component: PortfolioComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'zyxwv',
    component:ZyxwvComponent
  },
  {
    path: 'jklpo',
    component:JklpoComponent
  },
  {
    path: 'nmirf',
    component:NmirfComponent
  },
  {
    path: 'aqwsd',
    component:AqwsdComponent
  },
  {
    path: 'kplum',
    component:KplumComponent
  },
  {
    path: 'qwert',
    component:QwertComponent
  },
  {
    path: 'yuiop',
    component:YuiopComponent
  },
  {
    path: 'asdfg',
    component:AsdfgComponent
  },
  {
    path: 'zxcvb',
    component:ZxcvbComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
