import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TablaComponent } from './tabla/tabla.component';
const routes: Routes = [
  {
    path: 'tabla',
    component: TablaComponent
  },
  {
    path: 'registro',
    component: RegistrarComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
