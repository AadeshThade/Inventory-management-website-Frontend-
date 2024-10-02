import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/warehouse/core.service';
import { ProdservService } from '../product/prodserv.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent {
  productForm:FormGroup;
constructor(private _fb:FormBuilder,
  private _prodService:ProdservService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<ProductaddComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.productForm=this._fb.group({
    id:'',
    productName:'',
    availableQty:'',
    usedForProducts:'',
    manufacturingCost:'',
    labourCost:'',
    });
}
  ngOnInit(): void {
    this.productForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.productForm.valid){
      if(this.data){
        this._prodService.updateProduct(this.data.id,this.productForm.value).subscribe({
          next:(val:any)=>{
     
          this._coreService.openSnackBar('Warehouse Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._prodService.addProduct(this.productForm.value).subscribe({
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
