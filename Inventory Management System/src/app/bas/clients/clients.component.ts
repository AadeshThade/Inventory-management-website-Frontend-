import { Component, OnInit, ViewChild } from '@angular/core';
import { AddclientsComponent } from '../addclients/addclients.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServbasService } from '../servbas.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [  
    'id', 
    'sname',
    'semail',
    'mobileNo',
    'companyName',
    'companyContactNo',
    'address',
    'pinCode',
    'city',
    'ClientType',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _clientsService:ServbasService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getClientslist();
  
  }

openAddClientsform() {
 const dialogRef= this._dialog.open(AddclientsComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getClientslist();
  },
 });
}

  getClientslist() {
    this._clientsService.getClientsList().subscribe({
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

  deleteClients(id:number){
    this._clientsService.deleteClients(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getClientslist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(AddclientsComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getClientslist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
