import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgFor} from '@angular/common';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServsalesService } from '../sales/servsales.service';
@Component({
  selector: 'app-addsales',
  templateUrl: './addsales.component.html',
  styleUrls: ['./addsales.component.scss']
})
export class AddsalesComponent implements OnInit {
salesForm:FormGroup;
  status: string[] = [
'ORDERED',
'SHIPPED',
'DELIVERED'
  ];
 constructor(private _fb:FormBuilder,  private _saleService:ServsalesService,
  private _coreService:CoreService,
  private _dialogRef:MatDialogRef<AddsalesComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,
){
  this.salesForm=this._fb.group({
    id:"",
    quantitySold:"",
    unitPrice:"",
    gstPercentage:"",
    totalRevenue:"",
    orderDate:"",
    clients:"", 
    status:"",

  })
 }
 ngOnInit(): void {
  this.salesForm.patchValue(this.data);
}
onFormSubmit(){
if(this.salesForm.valid){
  if(this.data){
    this._saleService.updateSales(this.data.id,this.salesForm.value).subscribe({
      next:(val:any)=>{
 
      this._coreService.openSnackBar(' Updated!');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }else{
    this._saleService.addSales(this.salesForm.value).subscribe({
      next:(val:any)=>{
    
      this._coreService.openSnackBar(' Added');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }
 
}
}
}
