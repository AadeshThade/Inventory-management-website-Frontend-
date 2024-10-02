import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RawaddComponent } from '../rawadd/rawadd.component';
import { ProjservService } from '../project/projserv.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.scss']
})
export class ProjectaddComponent implements OnInit{
  projectForm:FormGroup;
constructor(private _fb:FormBuilder,
  private _projService:ProjservService,
  private _coreService:CoreService,
   private _dialogRef:MatDialogRef<ProjectaddComponent>,
   @Inject(MAT_DIALOG_DATA)public data:any,

  ){
  this.projectForm=this._fb.group({
    id:'',
    projectName:'',
    startDate:'',
    endDate:'',
    orderQuantity:'',
    estimatedBudget:'',
    finalTotal:'',
    });
}
  ngOnInit(): void {
    this.projectForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.projectForm.valid){
      if(this.data){
        this._projService.updateProject(this.data.id,this.projectForm.value).subscribe({
          next:(val:any)=>{
     
          this._coreService.openSnackBar('Warehouse Updated!');
          this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }else{
        this._projService.addProject(this.projectForm.value).subscribe({
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
