import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServstockService {

  constructor(private _http:HttpClient) { }

  addStock(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/stock-requests',data);
  }

  updateStock(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/stock-requests/${id}`,data);
  }

  getStockList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/stock-requests');
  }

  deleteStock(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/stock-requests/${id}`);
  }
}
