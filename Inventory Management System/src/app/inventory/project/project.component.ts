import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectaddComponent } from '../projectadd/projectadd.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjservService } from './projserv.service';
import { CoreService } from 'src/app/warehouse/core.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [   
    'id',
    'projectName',
    'startDate',
    'endDate',
    'orderQuantity',
    'estimatedBudget',
    'finalTotal',
    'action',
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private _dialog: MatDialog,
    private _projService:ProjservService,
    private _coreService:CoreService,){}
  ngOnInit(): void {
    this.getProjectlist();
  
  }

openAddProjectform() {
 const dialogRef= this._dialog.open(ProjectaddComponent);
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    this.getProjectlist();
  },
 });
}

  getProjectlist() {
    this._projService.getProjectList().subscribe({
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

  deleteProject(id:number){
    this._projService.deleteProject(id).subscribe({
      next:(res)=>{

        this._coreService.openSnackBar('Warehouse Deleted!', 'done');
        this.getProjectlist();
      },
      error:console.log,
    });
  }
  openEditForm(data:any){
   const dialogRef= this._dialog.open(ProjectaddComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getProjectlist();
      },
     });
    // this.router.navigate(["warehouse"]);
  }
  opened=false;
}
