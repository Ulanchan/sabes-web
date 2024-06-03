import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LightboxModule } from 'ngx-lightbox';
import { AppComponent } from './app.component';
import { TghbnComponent } from './tghbn/tghbn.component';
import { VcrtyComponent } from './vcrty/vcrty.component';
import { LnmkoComponent } from './lnmko/lnmko.component';



@NgModule({
  declarations: [
    AppComponent,
    TghbnComponent,
    VcrtyComponent,
    LnmkoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
