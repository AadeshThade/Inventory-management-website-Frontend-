import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdAddComponent } from '../prod-add/prod-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/warehouse/core.service';
import { ServprodService } from './servprod.service';

@Component({
  selector: 'app-prodline',
  templateUrl: './prodline.component.html',
  styleUrls: ['./prodline.component.scss']
})
export class ProdlineComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'id',
    'description',
    'isActive',
    'products',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _prodService:ServprodService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getProductlist();
  
  }

openAddProductform() {
 const dialogRef= this._dialog.open(ProdAddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getProductlist();
  },
 });
}

  getProductlist() {
    this._prodService.getProductList().subscribe({
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

  deleteProduct(id:number){
    this._prodService.deleteProduct(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Deleted!', 'done');
        this.getProductlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(ProdAddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getProductlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
