import { compileDeclareNgModuleFromMetadata } from '@angular/compiler'
import { Routes } from '@angular/router'
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component'
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard'

export const RUTAS_USUARIOS: Routes = [
  // http://localhost:4200/usuarios/9
  { path: ':usuarioId', component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard] }
]