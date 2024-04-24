import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {
recuperarUsuario: FormGroup;
loading: boolean = false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError: FirebaseCodeErrorService){
      
      this.recuperarUsuario= this.fb.group({
        correo: ['', [Validators.required, Validators.email]]
      })
    }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
    this.toastr.info('Revise su casilla de correo para resetear su contraseña','Recuperar contraseña')
    this.router.navigate(['/login'])
    }).catch((error) =>{
      this.loading = false;
      this.toastr.error(this.FirebaseError.codeError(error.code), 'Error');
    })
  }

}
