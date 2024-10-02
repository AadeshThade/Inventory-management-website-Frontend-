import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core.service';
import { ServiceService } from '../warehouse/service.service';
@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent implements OnInit {
wareForm:FormGroup;
constructor(private _fb:FormBuilder,
   private _wareService:ServiceService,
   private _coreService:CoreService,
   private _dialogRef:MatDialogRef<AddWarehouseComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.wareForm=this._fb.group({
    id:'',
    whName:'',
    managerName:'',
    managerEmail:'',
    address:'',
    pincode:'',
    city:'',
    });
}
  ngOnInit(): void {
    this.wareForm.patchValue(this.data);
  }
onFormSubmit(){
  if(this.wareForm.valid){
    if(this.data){
      this._wareService.updateWarehouse(this.data.id,this.wareForm.value).subscribe({
        next:(val:any)=>{
   
        this._coreService.openSnackBar('Warehouse Updated!');
        this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        }
       })
    }else{
      this._wareService.addWarehouse(this.wareForm.value).subscribe({
        next:(val:any)=>{
      
        this._coreService.openSnackBar('Warehouse Added');
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
