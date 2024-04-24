import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule} from '@angular/google-maps';
import{HttpClientModule} from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import {DragDropModule} from '@angular/cdk/drag-drop';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MapComponent } from './components/map/map.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponentComponent } from './components/success-component/success-component.component';
import { DragDroupComponent } from './components/drag-droup/drag-droup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarContrasenaComponent,
    SpinnerComponent,
    CarouselComponent,
    MapComponent,
    PaymentComponent,
    SuccessComponentComponent,
    DragDroupComponent,    

  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), NgbModule, // ToastrModule added
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
