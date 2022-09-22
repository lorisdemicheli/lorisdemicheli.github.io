import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageHome } from './pages/home/home.component';
import { PageLogin } from './pages/login/login.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageBancaDelMeme } from './pages/bancaDelMeme/bancaDelMeme.component';
import { InputBox } from './component/input-box/input-box.component';
import { Test } from './pages/test/test.component';
import { Card } from './component/card/card.component';
import { AuthGuardService } from './auth-guard.service';
import { NavigationBar } from './component/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderBox } from './component/loader-box/loader-box.component';
import { PageMatch } from './pages/match/match.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const component: (any[] | Type<any>)[] | undefined = [
  AppComponent,
  InputBox,
  Card,
  NavigationBar,
  LoaderBox,
];

const pages: (any[] | Type<any>)[] | undefined = [
  PageHome,
  PageMatch,
  PageLogin,
  PageNotFound,
  PageBancaDelMeme,
  Test
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
    BrowserAnimationsModule,
    QRCodeModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    AuthGuardService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
