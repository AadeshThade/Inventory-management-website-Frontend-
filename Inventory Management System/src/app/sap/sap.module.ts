import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SapRoutingModule } from './sap-routing.module';
import { SalesComponent } from './sales/sales.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ToolbarModule } from 'primeng/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AddsalesComponent } from './addsales/addsales.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NgFor} from '@angular/common';

import { PurqComponent } from './purq/purq.component';
import { PurqaddComponent } from './purq/purqadd/purqadd.component';
import { PurcdetComponent } from './purcdet/purcdet.component';
import { PurdetaddComponent } from './purcdet/purdetadd/purdetadd.component';
import { PreqComponent } from './preq/preq.component';
import { PreqaddComponent } from './preq/preqadd/preqadd.component';
@NgModule({
  declarations: [
    SalesComponent,
    AddsalesComponent,

    PurqComponent,
    PurqaddComponent,
    PurcdetComponent,
    PurdetaddComponent,
    PreqComponent,
    PreqaddComponent
  ],
  imports: [
    NgFor,
    CommonModule,
    SapRoutingModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ]
})
export class SapModule { }
