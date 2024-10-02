import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServstockService } from '../stock/servstock.service';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.scss']
})
export class StockAddComponent implements OnInit {
  stockForm:FormGroup;
  status: string[] = [
    'REQUESTED',
    'APPROVED',
    'CANCELED',
    'RECEIVED',
    'COMPLETED',
  ];
  stat: string[] = [
    'True',
    'False',
      ];
constructor(private _fb:FormBuilder,
  private _stockService:ServstockService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<StockAddComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.stockForm=this._fb.group({
    id:'',
    qtyRequired:'',
    reqDate:'',
    isProd:'',
    status:'',
    rawMaterial:'',
    products:'',
    productionLine:'',
    projects:'',
    });
}
  ngOnInit(): void {
    this.stockForm.patchValue(this.data);
  }
onFormSubmit(){
  if(this.stockForm.valid){
    if(this.data){
      this._stockService.updateStock(this.data.id,this.stockForm.value).subscribe({
        next:(val:any)=>{
   
        this._coreService.openSnackBar('Warehouse Updated!');
        this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        }
       })
    }else{
      this._stockService.addStock(this.stockForm.value).subscribe({
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
