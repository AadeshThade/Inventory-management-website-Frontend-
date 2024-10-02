import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreqserviceService {

  constructor(private _http:HttpClient) { }

  addPreq(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/purchase-requests',data);
  }

  updatePreq(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/purchase-requests/${id}`,data);
  }

  getPreqList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/purchase-requests');
  }

  deletePreq(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/purchase-requests/${id}`);
  }
}
