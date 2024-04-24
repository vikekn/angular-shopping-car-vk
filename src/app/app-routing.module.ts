import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponentComponent } from './components/success-component/success-component.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full' },
  {path: 'login',component: LoginComponent },
  {path: 'registrar-usuario',component: RegistrarUsuarioComponent },
  {path: 'verificar-correo',component: VerificarCorreoComponent },
  {path: 'recuperar-contrasena',component : RecuperarContrasenaComponent},
  {path: 'dashboard',component : DashboardComponent},
  {path: 'payment',component : PaymentComponent},
  {path: 'success',component : SuccessComponentComponent},
  {path: '**',redirectTo: 'login',pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
