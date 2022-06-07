import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenlayerComponent } from './component/openlayer/openlayer.component';

const routes: Routes = [
  {path:'openlayer',component:OpenlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
