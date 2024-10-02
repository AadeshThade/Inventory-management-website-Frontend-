import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PreqserviceService } from '../preqservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-preqadd',
  templateUrl: './preqadd.component.html',
  styleUrls: ['./preqadd.component.scss']
})
export class PreqaddComponent implements OnInit {
  reqForm:FormGroup;
  status: string[] = [
'REQUESTED',
'APPROVED',
'CANCELED',
'RECEIVED',
'COMPLETED',
  ];
 constructor(private _fb:FormBuilder, private _preqService:PreqserviceService,
  private _coreService:CoreService,
  private _dialogRef:MatDialogRef<PreqaddComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,){
  this.reqForm=this._fb.group({
    id:"",
    qtyRequired:"",
    requestDate:"",
    expectedDate:"",
    status:"",
    rawMaterialId:"",

  })
 }
 ngOnInit(): void {
  this.reqForm.patchValue(this.data);
}
onFormSubmit(){
if(this.reqForm.valid){
  if(this.data){
    this._preqService.updatePreq(this.data.id,this.reqForm.value).subscribe({
      next:(val:any)=>{
 
      this._coreService.openSnackBar(' Updated!');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }else{
    this._preqService.addPreq(this.reqForm.value).subscribe({
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
