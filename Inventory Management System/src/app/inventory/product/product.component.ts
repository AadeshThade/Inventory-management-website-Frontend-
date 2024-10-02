import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductaddComponent } from '../productadd/productadd.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProdservService } from './prodserv.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'id',
    'productName',
    'availableQty',
    'usedForProducts',
    'manufacturingCost',
    'labourCost',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _prodService:ProdservService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getProductlist();
  
  }

openAddProductform() {
 const dialogRef= this._dialog.open(ProductaddComponent);
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

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getProductlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(ProductaddComponent,{
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
