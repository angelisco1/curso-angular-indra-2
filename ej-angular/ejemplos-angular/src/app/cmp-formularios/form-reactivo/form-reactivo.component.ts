import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  formulario: FormGroup;
  datosPayload: any = null

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required, this.esStark, this.minLengthNuestro(4)]),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5), Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')],
        updateOn: 'blur'
      }),
      categorias: new FormArray([])
    })
  }

  selectCheckbox(event) {
    if (event.target.checked) {
      (<FormArray>this.formulario.controls.categorias).push(new FormControl(event.target.value))
    } else {
      // (<FormArray>this.formulario.controls.categorias).removeAt(pos)
    }
  }

  login() {
    console.log(this.formulario.value)
    const {username, password} = this.formulario.value
    this.authService.login(username, password)
      .subscribe((datos: any) => {
        console.log(datos.token)
        localStorage.setItem('jwtToken', datos.token)
        // sessionStorage.setItem('jwtToken', datos.token)

        const payload = jwtDecode(datos.token)
        this.datosPayload = payload
        console.log({payload})
      })
  }

  logout() {
    this.authService.logout()
  }

  getDatos() {
    this.authService.getDatos()
      .subscribe((datos: any) => {
        console.log({datos})
      }, (err) => {
        alert(err.error.msg)
      })
  }

  minLengthNuestro(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length >= min) {
        return null
      }
      return {
        minlength: {
          actualLength: control.value.length,
          requiredLength: min
        }
      }
    }
  }

  // esStark(usuariosStark: Array<string>) {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     if (usuariosStark.includes(control.value)) {
  //       return null // La validación es correcta
  //     }
  //     return {
  //       esStark: false
  //     } // La validación es incorrecta
  //   }
  // }


  esStark(control: AbstractControl): ValidationErrors | null {
    const usuariosStark = ['tony', 'rickon', 'arya', 'sansa', 'robb']
    if (usuariosStark.includes(control.value)) {
      return null // La validación es correcta
    }
    return {
      esStark: false
    } // La validación es incorrecta
  }

}
