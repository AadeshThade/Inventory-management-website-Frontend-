import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServbasService {


  constructor(private _http:HttpClient) { }

  addClients(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/clients',data);
  }

  updateClients(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/clients/${id}`,data);
  }

  getClientsList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/clients');
  }

  deleteClients(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/clients/${id}`);
  }
}
