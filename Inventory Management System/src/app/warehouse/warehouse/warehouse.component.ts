import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddWarehouseComponent } from '../add-warehouse/add-warehouse.component';
import { ServiceService } from './service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CoreService } from '../core.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  // [x: string]: any;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'id',
    // 'warehouseID',
    'whName',
    'managerName',
    'managerEmail',
    'address',
    'pincode',
    'city',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _dialog: MatDialog,
    private _wareService:ServiceService,
    private _coreService:CoreService,
    private dataService: DataService,){}
    whName:string;
  ngOnInit(): void {
    this.getWarehouselist();
    this.dataService.changeWarehouseName(this.whName);
  
  }

openAddWarehouseform() {
 const dialogRef= this._dialog.open(AddWarehouseComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getWarehouselist();
  },
 });
}

  getWarehouselist() {
    this._wareService.getWarehouseList().subscribe({
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

  deleteWarehouse(id:number){
    this._wareService.deleteWarehouse(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getWarehouselist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(AddWarehouseComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getWarehouselist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
