import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditComponent } from './components/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertyService } from './services/property.service';
import { OperationService } from './services/operation.service';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { PropertyComponent } from './components/property/property.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FooterComponent } from './components/footer/footer.component';
import { WaitingComponent } from './components/waiting/waiting.component';

import { CarouselModule } from 'ngx-bootstrap';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { ParallaxCompComponent } from './components/parallax-comp/parallax-comp.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { ModalTasacionesComponent } from './components/modal-tasaciones/modal-tasaciones.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { DeletedComponent } from './components/deleted/deleted.component';

import { Ng2CompleterModule } from "ng2-completer";
import { AlquileresComponent } from './components/alquileres/alquileres.component';
import { VentasComponent } from './components/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    EditComponent,
    ContactComponent,
    LoginPageComponent,
    PropertyComponent,
    FooterComponent,
    WaitingComponent,
    NewPropertyComponent,
    ParallaxCompComponent,
    ResultSearchComponent,
    ModalTasacionesComponent,
    UpdatePropertyComponent,
    DeletedComponent,
    AlquileresComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'taul-fire'),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireModule,
    FormsModule,
    AngularFireStorageModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    Ng2CompleterModule 
    
  ],
  providers: [AuthService, PropertyService, OperationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
