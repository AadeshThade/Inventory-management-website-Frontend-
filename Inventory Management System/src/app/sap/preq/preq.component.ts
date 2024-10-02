import { Component, OnInit, ViewChild } from '@angular/core';
import { PreqserviceService } from './preqservice.service';
import { PreqaddComponent } from './preqadd/preqadd.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-preq',
  templateUrl: './preq.component.html',
  styleUrls: ['./preq.component.scss']
})
export class PreqComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'qtyRequired',
    'requestDate',
    'expectedDate',
    'status',
    'rawMaterialId',
    'action', 
  ];

// constructor(private _dialog:MatDialog,    private _salesService:PreqserviceService,){}

//   ngOnInit(): void {
//     this.getRequestsList();
//   }
//   getRequestsList() {
//     throw new Error('Method not implemented.');
//   }
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _dialog: MatDialog,
    private _preqService:PreqserviceService,
    private _coreService:CoreService,
    private dataService: DataService,){}
    // whName:string;
  ngOnInit(): void {
    this.getPreqlist();
    // this.dataService.changeWarehouseName(this.whName);
  
  }

openAddPreqform() {
 const dialogRef= this._dialog.open(PreqaddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getPreqlist();
  },
 });
}

  getPreqlist() {
    this._preqService.getPreqList().subscribe({
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

  deletePreq(id:number){
    this._preqService.deletePreq(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar( 'Deleted!', 'done');
        this.getPreqlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(PreqaddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getPreqlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
