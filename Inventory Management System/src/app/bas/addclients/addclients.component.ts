import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServbasService } from '../servbas.service';

@Component({
  selector: 'app-addclients',
  templateUrl: './addclients.component.html',
  styleUrls: ['./addclients.component.scss']
})
export class AddclientsComponent implements OnInit {

  clientsForm:FormGroup;
constructor(private _fb:FormBuilder,
  private _clientsService:ServbasService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<AddclientsComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.clientsForm=this._fb.group({
   id:'',
    sname:'',
    semail:'',
    mobileNo:'',
    companyName:'',
    companyContactNo:'',
    address:'',
    pinCode:'',
    city:'',
    ClientType:'',
    });
}
  ngOnInit(): void {
    this.clientsForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.clientsForm.valid){
      if(this.data){
        this._clientsService.updateClients(this.data.id,this.clientsForm.value).subscribe({
          next:(val:any)=>{
     
          this._coreService.openSnackBar('Warehouse Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._clientsService.addClients(this.clientsForm.value).subscribe({
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
