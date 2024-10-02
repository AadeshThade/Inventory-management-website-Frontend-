import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RawComponent } from './raw/raw.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProductComponent } from './product/product.component';
import { ProjectComponent } from './project/project.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RawaddComponent } from './rawadd/rawadd.component';
import { ProjectaddComponent } from './projectadd/projectadd.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ProductaddComponent } from './productadd/productadd.component';

@NgModule({
  declarations: [
    RawComponent,
    ProductComponent,
    ProjectComponent,
    RawaddComponent,
    ProjectaddComponent,
    ProductaddComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class InventoryModule { }
