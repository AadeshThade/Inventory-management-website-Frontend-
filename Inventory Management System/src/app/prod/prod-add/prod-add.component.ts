import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServprodService } from '../prodline/servprod.service';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.scss']
})
export class ProdAddComponent implements OnInit {

  prodForm:FormGroup;
constructor(private _fb:FormBuilder,
  private _prodService:ServprodService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<ProdAddComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.prodForm=this._fb.group({
    id:'',
    description:'',
    isActive:'',
    products:'',
    });
}
stat: string[] = [
'Active',
'In-Active',
  ];
  convertToBoolean(value: string): boolean {
    return value === 'Active' ? true : false;
  }
  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.prodForm.valid){
      if(this.data){
        this._prodService.updateProduct(this.data.id,this.prodForm.value).subscribe({
          next:(val:any)=>{
            const selectedValue = this.prodForm.get('isActive').value;
            const convertedValue = this.convertToBoolean(selectedValue);
          this._coreService.openSnackBar(' Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._prodService.addProduct(this.prodForm.value).subscribe({
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
