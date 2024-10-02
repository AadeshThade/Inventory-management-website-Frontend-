import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawservService {

  constructor(private _http:HttpClient) { }

  addRawcon(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/raw-material-consumptions',data);
  }

  updateRawcon(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/raw-material-consumptions/${id}`,data);
  }

  getRawconList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/raw-material-consumptions');
  }

  deleteRawcon(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/raw-material-consumptions/${id}`);
  }
}
