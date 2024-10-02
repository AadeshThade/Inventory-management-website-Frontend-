import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServrawService } from '../raw/servraw.service';

@Component({
  selector: 'app-rawadd',
  templateUrl: './rawadd.component.html',
  styleUrls: ['./rawadd.component.scss']
})
export class RawaddComponent implements OnInit {

  rawForm:FormGroup;
constructor(private _fb:FormBuilder,
  private _rawService:ServrawService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<RawaddComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.rawForm=this._fb.group({
    name:'',
    barcode:'',
    quantity:'',
    unitPrice:'',
    unitMeasure:'',
    gstPercentage:'',
    reorderPoint:'',
    warehouse:'',
    });
}
  ngOnInit(): void {
    this.rawForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.rawForm.valid){
      if(this.data){
        this._rawService.updateRaw(this.data.id,this.rawForm.value).subscribe({
          next:(val:any)=>{
     
          this._coreService.openSnackBar('Warehouse Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._rawService.addRaw(this.rawForm.value).subscribe({
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


