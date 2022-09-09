import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { AuthGuardService } from './auth-guard.service';

const component: (any[] | Type<any>)[] | undefined = [
  AppComponent,
  InputBox,
  Card,
];

const pages: (any[] | Type<any>)[] | undefined = [
  PageHome,
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
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1079479956590-clfr0i2v0bd5aa38ns76bcijdmpnrjfq.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
