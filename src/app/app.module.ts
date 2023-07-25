import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { ParallaxCompComponent } from './components/parallax-comp/parallax-comp.component';
import { WhatsappIconComponent } from './components/whatsapp-icon/whatsapp-icon.component';
import { HomeComponent } from './components/home/home.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AlquileresComponent } from './components/alquileres/alquileres.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { PropertyComponent } from './components/property/property.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from "@angular/forms";
import { Ng2CompleterModule } from 'ng2-completer';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EditComponent } from './components/edit/edit.component';
import { NewLocationComponent } from './components/new-location/new-location.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { DatePipe } from '@angular/common';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ParallaxCompComponent,
    WhatsappIconComponent,
    HomeComponent,
    WaitingComponent,
    VentasComponent,
    AlquileresComponent,
    ResultSearchComponent,
    PropertyComponent,
    LoginPageComponent,
    EditComponent,
    NewLocationComponent,
    DeletedComponent,
    NewPropertyComponent,
    UpdatePropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    Ng2CompleterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
