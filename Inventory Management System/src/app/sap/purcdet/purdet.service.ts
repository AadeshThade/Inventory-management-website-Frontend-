import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurdetService {

  constructor(private _http:HttpClient) { }

  addPurdet(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/purchase-quotation-details',data);
  }

  updatePurdet(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/purchase-quotation-details/${id}`,data);
  }

  getPurdetList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/purchase-quotation-details');
  }

  deletePurdet(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/purchase-quotation-details/${id}`);
  }
}
