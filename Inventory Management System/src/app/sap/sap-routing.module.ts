import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';

// const routes: Routes = [
//   {path:'sales',component:SalesComponent},
// ];

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: SalesComponent }])],
  exports: [RouterModule]
})
export class SapRoutingModule { }
