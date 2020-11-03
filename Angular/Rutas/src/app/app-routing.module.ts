import { LoginGuard } from './login.guard';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CursosComponent } from './cursos/cursos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: PrincipalComponent, canActivate: [LoginGuard] },
  { path: 'info', component: InformacionComponent, canActivate: [LoginGuard] },
  { path: 'cursos', component: CursosComponent },
  {
    path: 'cursos/:idCurso', component: CursosComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent }
    ]
  },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
