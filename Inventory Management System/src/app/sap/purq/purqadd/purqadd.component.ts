import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-purqadd',
  templateUrl: './purqadd.component.html',
  styleUrls: ['./purqadd.component.scss']
})
export class PurqaddComponent implements OnInit {
  quotForm:FormGroup;
  status: string[] = [
    'REQUESTED',
    'APPROVED',
    'CANCELED',
    'RECEIVED',
    'COMPLETED',
  ];
 constructor(private _fb:FormBuilder,
  private _coreService:CoreService,
  private _purcqService:PurchaseService,
  private _dialogRef:MatDialogRef<PurqaddComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,){
  this.quotForm=this._fb.group({
    id:"",
    referenceNumber:"",
    totalPOAmount:"",
    totalGSTAmount:"",
    poDate:"",
    expectedDeliveryDate:"",
    orderstatus:"",
    clients:"", 
   

  })
 }
 
 ngOnInit(): void {
  this.quotForm.patchValue(this.data);
}
onFormSubmit(){
if(this.quotForm.valid){
  if(this.data){
    this._purcqService.updatePurq(this.data.id,this.quotForm.value).subscribe({
      next:(val:any)=>{
 
      this._coreService.openSnackBar(' Updated!');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }else{
    this._purcqService.addPurq(this.quotForm.value).subscribe({
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
