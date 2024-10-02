
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddsalesComponent } from '../addsales/addsales.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { ServsalesService } from './servsales.service';
import { DataService } from 'src/app/data.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'quantitySold',
    'unitPrice',
    'gstPercentage',
    'totalRevenue',
    'orderDate',
    'clientsId',
    'status',
    'action', 
  ];

// constructor(private _dialog:MatDialog,  ){}

//   ngOnInit(): void {
//     this.getSalesList();
//   }
//   getSalesList() {
//     throw new Error('Method not implemented.');
//   }
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _dialog: MatDialog,
    private _salesService:ServsalesService,
    private _coreService:CoreService,
    private dataService: DataService,){}
    whName:string;
  ngOnInit(): void {
    this.getSaleslist();
    // this.dataService.changeWarehouseName(this.whName);
  
  }

openAddSalesform() {
 const dialogRef= this._dialog.open(AddsalesComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getSaleslist();
  },
 });
}

  getSaleslist() {
    this._salesService.getSalesList().subscribe({
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

  deleteSales(id:number){
    this._salesService.deleteSales(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Deleted!', 'done');
        this.getSaleslist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(AddsalesComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getSaleslist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}

