import { Component, OnInit, ViewChild } from '@angular/core';
import { StockAddComponent } from '../stock-add/stock-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServstockService } from './servstock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [  
    'id', 
    'qtyRequired',
    'reqDate',
    'isProd',
    'status',
    'rawMaterial',
    'products',
    'productionLine',
    'projects',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _stockService:ServstockService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getStocklist();
  
  }

openAddStockform() {
 const dialogRef= this._dialog.open(StockAddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getStocklist();
  },
 });
}

  getStocklist() {
    this._stockService.getStockList().subscribe({
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

  deleteStock(id:number){
    this._stockService.deleteStock(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getStocklist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(StockAddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getStocklist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
