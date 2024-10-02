import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RawComponent } from './raw/raw.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RawComponent },
])],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
