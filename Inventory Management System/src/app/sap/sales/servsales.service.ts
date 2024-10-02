import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServsalesService {

  constructor(private _http:HttpClient) { }

  addSales(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/sales-orderds',data);
  }

  updateSales(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/sales-orderds/${id}`,data);
  }

  getSalesList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/sales-orderds');
  }

  deleteSales(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/sales-orderds/${id}`);
  }
}
