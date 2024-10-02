import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PurdetService } from '../purdet.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-purdetadd',
  templateUrl: './purdetadd.component.html',
  styleUrls: ['./purdetadd.component.scss']
})
export class PurdetaddComponent {
  detForm:FormGroup;
 
 constructor(private _fb:FormBuilder,  private _purdetService:PurdetService,
  private _coreService:CoreService,
  private _dialogRef:MatDialogRef<PurdetaddComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,){
  this.detForm=this._fb.group({
    id:"",
    qtyOrdered:"",
    gstTaxPercentage:"",
    pricePerUnit:"",
    totalPrice:"",
    discount:"",
    rawMaterialId:"",
    purchaseQuotationId:"",
   
  })
 }
 ngOnInit(): void {
  this.detForm.patchValue(this.data);
}
onFormSubmit(){
if(this.detForm.valid){
  if(this.data){
    this._purdetService.updatePurdet(this.data.id,this.detForm.value).subscribe({
      next:(val:any)=>{
 
      this._coreService.openSnackBar(' Updated!');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }else{
    this._purdetService.addPurdet(this.detForm.value).subscribe({
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
