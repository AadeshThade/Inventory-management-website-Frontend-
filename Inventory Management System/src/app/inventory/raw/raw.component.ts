import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RawaddComponent } from '../rawadd/rawadd.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServrawService } from './servraw.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.scss']
})
export class RawComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'name',
    'barcode',
    'quantity',
    'unitPrice',
    'unitMeasure',
    'gstPercentage',
    'reorderPoint',
    'warehouse',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
whName:string;

  constructor(private _dialog: MatDialog,
    private _rawService:ServrawService,
    private _coreService:CoreService,
    private dataService: DataService){}
  ngOnInit(): void {
    this.getRawlist();
    this.dataService.currentWarehouseName.subscribe(name => this.whName = name);
  }

openAddRawform() {
 const dialogRef= this._dialog.open(RawaddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getRawlist();
  },
 });
}

  getRawlist() {
    this._rawService.getRawList().subscribe({
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

  deleteRaw(id:number){
    this._rawService.deleteRaw(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getRawlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(RawaddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getRawlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
