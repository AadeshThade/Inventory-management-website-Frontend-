import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdlineComponent } from './prodline/prodline.component';
import { ProdAddComponent } from './prod-add/prod-add.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ProdlineComponent }])],
  exports: [RouterModule]
})
export class ProdRoutingModule { }
