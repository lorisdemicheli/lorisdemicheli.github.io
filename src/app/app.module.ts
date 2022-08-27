import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComp } from './component/footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageHome } from './pages/home/home.component';
import { PageLogin } from './pages/login/login.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Countdown } from './component/countdown/countdown.component';
import { PageBancaDelMeme } from './pages/bancaDelMeme/bancaDelMeme.component';

const component: (any[] | Type<any>)[] | undefined = [
  AppComponent,
  FooterComp,
  Countdown,
];

const pages: (any[] | Type<any>)[] | undefined = [
  FooterComp,
  PageHome,
  PageLogin,
  PageNotFound,
  PageBancaDelMeme,
];

@NgModule({
  declarations: [
    pages,
    component
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
