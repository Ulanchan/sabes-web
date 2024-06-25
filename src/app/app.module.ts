import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LightboxModule } from 'ngx-lightbox';
import { AppComponent } from './app.component';
import { TghbnComponent } from './tghbn/tghbn.component';
import { VcrtyComponent } from './vcrty/vcrty.component';
import { LnmkoComponent } from './shared/lnmko/lnmko.component';
import { IrexComponent } from './shared/irex/irex.component';
import { YcxdComponent } from './shared/ycxd/ycxd.component';
import { WyoiComponent } from './shared/wyoi/wyoi.component';
import { XslhComponent } from './shared/xslh/xslh.component';
import { PtqhComponent } from './shared/ptqh/ptqh.component';
import { IkjoComponent } from './shared/ikjo/ikjo.component';
import { WmcoComponent } from './shared/wmco/wmco.component';
import { ZbrkComponent } from './shared/zbrk/zbrk.component';
import { CdruComponent } from './shared/cdru/cdru.component';
import { AmihComponent } from './shared/amih/amih.component';
import { MueuComponent } from './shared/mueu/mueu.component';
import { MrjjComponent } from './shared/mrjj/mrjj.component';
import { KoriComponent } from './shared/kori/kori.component';
import { IsbgComponent } from './shared/isbg/isbg.component';
import { CiwqComponent } from './shared/ciwq/ciwq.component';
import { TxmeComponent } from './shared/txme/txme.component';
import { OygaComponent } from './shared/oyga/oyga.component';
import { UclrComponent } from './shared/uclr/uclr.component';
import { FdcvbComponent } from './shared/fdcvb/fdcvb.component';
import { PlmnkComponent } from './shared/plmnk/plmnk.component';

@NgModule({
  declarations: [
    AppComponent,
    TghbnComponent,
    VcrtyComponent,
    LnmkoComponent,
    IrexComponent,
    YcxdComponent,
    WyoiComponent,
    XslhComponent,
    PtqhComponent,
    IkjoComponent,
    WmcoComponent,
    ZbrkComponent,
    CdruComponent,
    AmihComponent,
    MueuComponent,
    MrjjComponent,
    KoriComponent,
    IsbgComponent,
    CiwqComponent,
    TxmeComponent,
    OygaComponent,
    UclrComponent,
    FdcvbComponent,
    PlmnkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LightboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
