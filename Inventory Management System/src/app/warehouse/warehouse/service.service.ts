import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  addWarehouse(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/warehouses',data);
  }

  updateWarehouse(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/warehouses/${id}`,data);
  }

  getWarehouseList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/warehouses');
  }

  deleteWarehouse(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/warehouses/${id}`);
  }
}
