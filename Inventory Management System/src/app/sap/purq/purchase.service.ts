import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  constructor(private _http:HttpClient) { }

  addPurq(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/purchase-quotations',data);
  }

  updatePurq(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/purchase-quotations/${id}`,data);
  }

  getPurqList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/purchase-quotations');
  }

  deletePurq(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/purchase-quotations/${id}`);
  }

}
