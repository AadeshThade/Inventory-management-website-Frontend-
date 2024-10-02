import { Component, OnInit, ViewChild } from '@angular/core';
import { RawservService } from './rawserv.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import { AddrawComponent } from './addraw/addraw.component';

@Component({
  selector: 'app-rawcon',
  templateUrl: './rawcon.component.html',
  styleUrls: ['./rawcon.component.scss']
})
export class RawconComponent implements OnInit {
  // [x: string]: any;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'id',
	'projectId',
  'productId',
  'productionLine',
  'rawMaterialId',
  'quantityConsumed',
  'scrapGenerated',
  'totalMaterialCost'
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _dialog: MatDialog,
    private _rawconService:RawservService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getRawconlist();
  
  }

openAddRawconform() {
 const dialogRef= this._dialog.open(AddrawComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getRawconlist();
  },
 });
}

  getRawconlist() {
    this._rawconService.getRawconList().subscribe({
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

  deleteRawcon(id:number){
    this._rawconService.deleteRawcon(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getRawconlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(AddrawComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getRawconlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
