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
import { TghbnComponent } from '../tghbn/tghbn.component';
import { VcrtyComponent } from '../vcrty/vcrty.component';
import { LnmkoComponent } from '../shared/lnmko/lnmko.component';
import { KjmopComponent } from '../shared/kjmop/kjmop.component';
import { ZsdrtComponent } from '../shared/zsdrt/zsdrt.component';
import { QxzawComponent } from '../shared/qxzaw/qxzaw.component';
import { PoiuyComponent } from '../shared/poiuy/poiuy.component';
import { KjhgfComponent } from '../shared/kjhgf/kjhgf.component';
import { LkjhgComponent } from '../shared/lkjhg/lkjhg.component';
import { HgbvcComponent } from '../shared/hgbvc/hgbvc.component';
import { RtyuiComponent } from '../shared/rtyui/rtyui.component';
import { CvbnmComponent } from '../shared/cvbnm/cvbnm.component';
import { MnbvcComponent } from '../shared/mnbvc/mnbvc.component';
import { QazwsComponent } from '../shared/qazws/qazws.component';
import { XdfghComponent } from '../shared/xdfgh/xdfgh.component';
import { ErtyuComponent } from '../shared/ertyu/ertyu.component';
import { UytrfComponent } from '../shared/uytrf/uytrf.component';
import { AqxwsComponent } from '../shared/aqxws/aqxws.component';
import { WerzxComponent } from '../shared/werzx/werzx.component';
import { CfgqComponent } from '../shared/cfgq/cfgq.component';
import { JULGComponent } from '../shared/julg/julg.component';
import { VDQWComponent } from '../shared/vdqw/vdqw.component';
import { PKQUComponent } from '../shared/pkqu/pkqu.component';
import { OQADComponent } from '../shared/oqad/oqad.component';
import { YLPOComponent } from '../shared/ylpo/ylpo.component';
import { ZzkzComponent } from '../shared/zzkz/zzkz.component';
import { RlgcComponent } from '../shared/rlgc/rlgc.component';
import { YvkoComponent } from '../shared/yvko/yvko.component';
import { AnvdComponent } from '../shared/anvd/anvd.component';
import { XsvkComponent } from '../shared/xsvk/xsvk.component';
<<<<<<< HEAD
import { QcfvComponent } from '../shared/qcfv/qcfv.component';
import { AmihComponent } from '../shared/amih/amih.component';
import { CdruComponent } from '../shared/cdru/cdru.component';
import { CiwqComponent } from '../shared/ciwq/ciwq.component';
import { IrexComponent } from '../shared/irex/irex.component';
import { YcxdComponent } from '../shared/ycxd/ycxd.component';
import { WyoiComponent } from '../shared/wyoi/wyoi.component';
import { XslhComponent } from '../shared/xslh/xslh.component';
import { PtqhComponent } from '../shared/ptqh/ptqh.component';
import { IkjoComponent } from '../shared/ikjo/ikjo.component';
import { WmcoComponent } from '../shared/wmco/wmco.component';
import { ZbrkComponent } from '../shared/zbrk/zbrk.component';
import { MueuComponent } from '../shared/mueu/mueu.component';
import { MrjjComponent } from '../shared/mrjj/mrjj.component';
import { KoriComponent } from '../shared/kori/kori.component';
import { IsbgComponent } from '../shared/isbg/isbg.component';
import { TxmeComponent } from '../shared/txme/txme.component';
import { OygaComponent } from '../shared/oyga/oyga.component';
import { UclrComponent } from '../shared/uclr/uclr.component';
=======
>>>>>>> b77ee94b20608b2b06b7e27372ab58e08426567d

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'portfolio-detail',
    component: PortofolioDetailComponent,
  },
  {
    path: 'certificate',
    component: PortfolioComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'zyxwv',
    component: ZyxwvComponent,
  },
  {
    path: 'jklpo',
    component: JklpoComponent,
  },
  {
    path: 'nmirf',
    component: NmirfComponent,
  },
  {
    path: 'aqwsd',
    component: AqwsdComponent,
  },
  {
    path: 'kplum',
    component: KplumComponent,
  },
  {
    path: 'qwert',
    component: QwertComponent,
  },
  {
    path: 'yuiop',
    component: YuiopComponent,
  },
  {
    path: 'asdfg',
    component: AsdfgComponent,
  },
  {
    path: 'zxcvb',
    component: ZxcvbComponent,
  },
  {
    path: 'tghbn',
    component: TghbnComponent,
  },
  {
    path: 'vcrty',
    component: VcrtyComponent,
  },
  {
    path: 'lnmko',
    component: LnmkoComponent,
  },
  {
    path: 'kjmop',
    component: KjmopComponent,
  },
  {
    path: 'zsdrt',
    component: ZsdrtComponent,
  },
  {
    path: 'qxzaw',
    component: QxzawComponent,
  },
  {
    path: 'poiuy',
    component: PoiuyComponent,
  },
  {
    path: 'kjhgf',
    component: KjhgfComponent,
  },
  {
    path: 'lkjhg',
    component: LkjhgComponent,
  },
  {
    path: 'lkjhg',
    component: LkjhgComponent,
  },
  {
    path: 'hgbvc',
    component: HgbvcComponent,
  },
  {
    path: 'rtyui',
    component: RtyuiComponent,
  },
  {
    path: 'cvbnm',
    component: CvbnmComponent,
  },
  {
    path: 'mnbvc',
    component: MnbvcComponent,
  },
  {
    path: 'qazws',
    component: QazwsComponent,
  },
  {
    path: 'xdfgh',
    component: XdfghComponent,
  },
  {
    path: 'ertyu',
    component: ErtyuComponent,
  },
  {
    path: 'uytrf',
    component: UytrfComponent,
  },
  {
    path: 'aqxws',
    component: AqxwsComponent,
  },
  {
    path: 'werzx',
    component: WerzxComponent,
  },
  {
<<<<<<< HEAD
    path: 'cfgq',
    component: CfgqComponent,
  },
  {
    path: 'JULG',
    component: JULGComponent,
  },
  {
    path: 'VDQW',
    component: VDQWComponent,
  },
  {
    path: 'PKQU',
    component: PKQUComponent,
  },
  {
    path: 'OQAD',
    component: OQADComponent,
  },
  {
    path: 'YLPO',
    component: YLPOComponent,
  },
  {
    path: 'ZZKZ',
    component: ZzkzComponent,
  },
  {
    path: 'RLGC',
    component: RlgcComponent,
  },
  {
    path: 'YVKO',
    component: YvkoComponent,
  },
  {
    path: 'ANVD',
    component: AnvdComponent,
  },
  {
    path: 'XSVK',
    component: XsvkComponent,
  },
  {
    path: 'QCFV',
    component: QcfvComponent,
  },
  {
    path: 'AMIH',
    component: AmihComponent,
  },
  {
    path: 'CDRU',
    component: CdruComponent,
  },
  {
    path: 'CIWQ',
    component: CiwqComponent,
  },
  {
    path: 'IREX',
    component: IrexComponent,
  },
  {
    path: 'YCXD',
    component: YcxdComponent,
  },
  {
    path: 'WYOI',
    component: WyoiComponent,
  },
  {
    path: 'XSLH',
    component: XslhComponent,
  },
  {
    path: 'PTQH',
    component: PtqhComponent,
  },
  {
    path: 'IKJO',
    component: IkjoComponent,
  },
  {
    path: 'WMCO',
    component: WmcoComponent,
  },
  {
    path: 'ZBRK',
    component: ZbrkComponent,
  },
  {
    path: 'MUEU',
    component: MueuComponent,
  },
  {
    path: 'MRJJ',
    component: MrjjComponent,
  },
  {
    path: 'KORI',
    component: KoriComponent,
  },
  {
    path: 'ISBG',
    component: IsbgComponent,
  },
  {
    path: 'TXME',
    component: TxmeComponent,
  },
  {
    path: 'OYGA',
    component: OygaComponent,
  },
  {
    path: 'UCLR',
    component: UclrComponent,
=======
    path: 'julg',
    component: JULGComponent,
  },
  {
    path: 'vdqw',
    component: VDQWComponent,
  },
  {
    path: 'pkqu',
    component: PKQUComponent,
  },
  {
    path: 'oqad',
    component: OQADComponent,
  },
  {
    path: 'ylpo',
    component: YLPOComponent,
  },
  {
    path: 'zzkz',
    component: ZzkzComponent,
  },
  {
    path: 'rlgc',
    component: RlgcComponent,
  },
  {
    path: 'yvko',
    component: YvkoComponent,
  },
  {
    path: 'anvd',
    component: AnvdComponent,
  },
  {
    path: 'xsvk',
    component: XsvkComponent,
  },
  {
    path: 'cfgq',
    component: CfgqComponent,
>>>>>>> b77ee94b20608b2b06b7e27372ab58e08426567d
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
