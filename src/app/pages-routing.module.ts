import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { PageHome } from './pages/home/home.component';
import { PageMatch } from './pages/match/match.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';
import { PageRegister } from './pages/register/register.component';
import { Test } from './pages/test/test.component';
import { PageUser } from './pages/user/user.component';

const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: PageHome, pathMatch: 'full' },
  {path: 'user/:username', component: PageUser, canActivate: [AuthGuardService] },
  {path: 'match/:code', component: PageMatch, canActivate: [AuthGuardService] },
  {path: 'test', component: Test },
  {path: 'register', component: PageRegister },
  {path: '**', component: PageNotFound },
  //{path: '**', loadChildren: () => { import('').then(m=>m.class)} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}