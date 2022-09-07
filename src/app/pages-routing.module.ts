import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBancaDelMeme } from './pages/bancaDelMeme/bancaDelMeme.component';
import { PageHome } from './pages/home/home.component';
import { PageLogin } from './pages/login/login.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';
import { Test } from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'meme', component: PageBancaDelMeme },
  {path: 'home', component: PageHome },
  {path: 'home/login', component: PageLogin },
  {path: 'test', component: Test },
  {path: '404', component: PageNotFound },
  {path: '**', redirectTo: '404' },
  //{path: '**', loadChildren: () => { import('').then(m=>m.class)} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}