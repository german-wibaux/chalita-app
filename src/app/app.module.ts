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
    ResultSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
