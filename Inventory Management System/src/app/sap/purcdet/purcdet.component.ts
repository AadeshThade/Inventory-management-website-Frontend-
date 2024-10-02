import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurdetService } from './purdet.service';
import { PurdetaddComponent } from './purdetadd/purdetadd.component';
import { DataService } from 'src/app/data.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-purcdet',
  templateUrl: './purcdet.component.html',
  styleUrls: ['./purcdet.component.scss']
})
export class PurcdetComponent implements OnInit{
  displayedColumns: string[] = [
    'qtyOrdered',
    'gstTaxPercentage',
    'pricePerUnit',
    'totalPrice',
    'discount',
    'rawMaterialId',
   'purchaseQuotationId',
    'action', 
  ];

// constructor(private _dialog:MatDialog,    private _purcService:PurdetService,){}

//   ngOnInit(): void {
//     this.getDetList();
//   }
//   getDetList() {
//     throw new Error('Method not implemented.');
//   }
//   dataSource!: MatTableDataSource<any>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
//   openAddDetform(){
//     this._dialog.open(PurdetaddComponent)
//   }
//   deleteDet(id:number){


//   }
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor(private _dialog: MatDialog,
  private _purdetService:PurdetService,
  private _coreService:CoreService,
  private dataService: DataService,){}
  whName:string;
ngOnInit(): void {
  this.getPurdetlist();
  // this.dataService.changeWarehouseName(this.whName);

}

openAddDetform() {
const dialogRef= this._dialog.open(PurdetaddComponent);
dialogRef.afterClosed().subscribe({
next:(val)=>{
  this.getPurdetlist();
},
});
}

getPurdetlist() {
  this._purdetService.getPurdetList().subscribe({
    next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    },
  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();    
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

deletePurdet(id:number){
  this._purdetService.deletePurdet(id).subscribe({
    next:(res)=>{

      this._coreService.openSnackBar('Deleted!', 'done');
      this.getPurdetlist();
    },
    error:console.log,
  });
}
openEditForm(data:any){
 const dialogRef= this._dialog.open(PurdetaddComponent,{
    data,
  });

  dialogRef.afterClosed().subscribe({
    next:(val)=>{
      this.getPurdetlist();
    },
   });
  // this.router.navigate(["warehouse"]);
}
opened=false;
}
