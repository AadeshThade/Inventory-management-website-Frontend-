import { Component, OnInit, ViewChild } from '@angular/core';
import { PurqaddComponent } from './purqadd/purqadd.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PurchaseService } from './purchase.service';
import { DataService } from 'src/app/data.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-purq',
  templateUrl: './purq.component.html',
  styleUrls: ['./purq.component.scss']
})
export class PurqComponent implements OnInit {
  displayedColumns: string[] = [
    'referenceNumber',
    'totalPOAmount',
    'totalGSTAmount',
    'poDate',
    'expectedDeliveryDate',
    'orderStatus',
    'clients',
    'action', 
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _dialog: MatDialog,
    private _purcqService:PurchaseService,
    private _coreService:CoreService,
    private dataService: DataService,){}
    whName:string;
  ngOnInit(): void {
    this.getPurqlist();
    // this.dataService.changeWarehouseName(this.whName);
  
  }

openAddQuotform() {
 const dialogRef= this._dialog.open(PurqaddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getPurqlist();
  },
 });
}

  getPurqlist() {
    this._purcqService.getPurqList().subscribe({
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

  deletePurq(id:number){
    this._purcqService.deletePurq(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Deleted!', 'done');
        this.getPurqlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(PurqaddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getPurqlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
