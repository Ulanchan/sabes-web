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
    path: 'index-two',
    component: IndexTwoComponent
  },
  {
    path: 'index-three',
    component: IndexThreeComponent
  },
  {
    path: 'index-four',
    component: IndexFourComponent
  },
  {
    path: 'index-five',
    component: IndexFiveComponent
  },
  {
    path: 'index-six',
    component: IndexSixComponent
  },
  {
    path: 'index-seven',
    component: IndexSevenComponent
  },
  {
    path: 'index-eight',
    component: IndexEightComponent
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
    path: 'sertif',
    component:SertifComponent
  },
  {
    path: 'zyxwv',
    component:ZyxwvComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
