import { RouterModule, Routes } from '@angular/router'
import { Error404Component } from './error404/error404.component'
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component'
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component'
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component'
import { NuevoUsuarioGuard } from './nuevo-usuario/nuevo-usuario.guard'
import { RUTAS_USUARIOS } from './usuarios.routes'

const RUTAS_APP: Routes = [
  // http://localhost:4200
  // { path: '', component: ListaUsuariosComponent },

  // http://localhost:4200/usuarios
  { path: 'usuarios', component: ListaUsuariosComponent, children: RUTAS_USUARIOS },

  // http://localhost:4200/nuevo-usuario
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canDeactivate: [NuevoUsuarioGuard] },

  // http://localhost:4200/usuarios/4
  // { path: 'usuarios/:usuarioId', component: InfoUsuarioComponent },

  // { path: 'admin', loadChildren: './admin/admin.module.ts#AdminModule' }
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(modulo => modulo.AdminModule) },

  // // http://localhost:4200
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },

  // http://localhost:4200/no-existe
  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(RUTAS_APP)