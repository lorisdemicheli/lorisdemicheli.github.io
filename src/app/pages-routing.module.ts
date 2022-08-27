import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBancaDelMeme } from './pages/bancaDelMeme/bancaDelMeme.component';
import { PageHome } from './pages/home/home.component';
import { PageLogin } from './pages/login/login.component';
import { PageNotFound } from './pages/pageNotFound/pageNotFound.component.';

const routes: Routes = [
  {path: '', redirectTo: 'meme', pathMatch: 'full' },
  {path: 'meme', component: PageBancaDelMeme },
  {path: 'home', component: PageHome },
  {path: 'home/login', component: PageLogin },
  {path: '404', component: PageNotFound },
  {path: '**', redirectTo: '404' },
  //{path: '**', loadChildren: () => { import('').then(m=>m.class)} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}