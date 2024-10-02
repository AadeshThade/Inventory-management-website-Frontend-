import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServrawService {

  constructor(private _http:HttpClient) { }

  addRaw(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/raw-materials',data);
  }

  updateRaw(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/raw-materials/${id}`,data);
  }

  getRawList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/raw-materials');
  }

  deleteRaw(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/raw-materials/${id}`);
  }
}
