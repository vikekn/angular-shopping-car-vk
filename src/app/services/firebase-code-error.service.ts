import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {

      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'Usuario ya existe'
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña debe tener 6 caracteres'
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'El correo es invalido'
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta'
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Email no registrado'
      default:
        return 'Error desconocido'
    }


  }
}
