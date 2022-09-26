import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageHome } from './pages/home/home.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { PageUser } from './pages/user/user.component';
import { ToastsContainer } from './component/toast/toasts-container.component';
import { PageRegister } from './pages/register/register.component';
import { FormInputBox } from './component/form-input-box/form-input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const component: (any[] | Type<any>)[] | undefined = [
  AppComponent,
  InputBox,
  Card,
  NavigationBar,
  LoaderBox,
  ToastsContainer,
  FormInputBox
];

const pages: (any[] | Type<any>)[] | undefined = [
  PageHome,
  PageUser,
  PageMatch,
  PageNotFound,
  Test,
  PageRegister
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
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuardService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
