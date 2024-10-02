import { Component, Inject, OnInit } from '@angular/core';
import { RawservService } from '../rawserv.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core.service';

@Component({
  selector: 'app-addraw',
  templateUrl: './addraw.component.html',
  styleUrls: ['./addraw.component.scss']
})
export class AddrawComponent implements OnInit {
  rawconForm:FormGroup;
  constructor(private _fb:FormBuilder,
     private _rawService:RawservService,
     private _dialogRef:MatDialogRef<AddrawComponent>,
     @Inject(MAT_DIALOG_DATA)public data:any,
     private _coreService:CoreService,
    ){
    this.rawconForm=this._fb.group({

      projectId:'',
      productId:'',
      productionLine:'',    
      rawMaterialId:'', 
    quantityConsumed:'',
      scrapGenerated:'',
      totalMaterialCost:'',
      });
  }
    ngOnInit(): void {
      this.rawconForm.patchValue(this.data);
    }
  onFormSubmit(){
    if(this.rawconForm.valid){
      if(this.data){
        this._rawService.updateRawcon(this.data.id,this.rawconForm.value).subscribe({
          next:(val:any)=>{
     
          this._coreService.openSnackBar('Warehouse Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._rawService.addRawcon(this.rawconForm.value).subscribe({
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
