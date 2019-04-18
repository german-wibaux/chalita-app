import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PropertyComponent } from './components/property/property.component';
import { AboutComponent } from './components/about/about.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { DeletedComponent } from './components/deleted/deleted.component';


const routes: Routes = [
    {path: '', component: HomeComponent  },
    {path: 'login', component: LoginPageComponent},
    {path: 'private', canActivate:[AuthGuardService], component: EditComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'new-property', canActivate:[AuthGuardService] , component: NewPropertyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'result/:operation/:property/:location', component: ResultSearchComponent },
    //{ path: 'details', component: PropertyComponent },
    { path: 'update-prop/:id', canActivate:[AuthGuardService], component: UpdatePropertyComponent },
    { path: 'details/:id', component: PropertyComponent },
    { path: 'edit', canActivate:[AuthGuardService], component: EditComponent },
    { path: 'deleted' , canActivate:[AuthGuardService], component: DeletedComponent },
    { path: 'wait', component: WaitingComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})

export class AppRoutingModule { }