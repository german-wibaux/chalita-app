import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'details/:id', component: PropertyComponent },
  // { path: 'alqui', component: AlquileresComponent },
  // { path: 'ventas', component: VentasComponent },
  // { path: 'result/:operation/:property/:location', component: ResultSearchComponent },
  // { path: 'private', canActivate:[AuthGuardService], component: EditComponent },
  // { path: 'new-property', canActivate:[AuthGuardService] , component: NewPropertyComponent },
  // { path: 'new-location', canActivate:[AuthGuardService] , component: NewLocationComponent },
  // { path: 'update-prop/:id', canActivate:[AuthGuardService], component: UpdatePropertyComponent },
  // { path: 'edit', canActivate:[AuthGuardService], component: EditComponent },
  // { path: 'deleted' , canActivate:[AuthGuardService], component: DeletedComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
