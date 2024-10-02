import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjservService {

  
  constructor(private _http:HttpClient) { }

  addProject(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/projects',data);
  }

  updateProject(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/projects/${id}`,data);
  }

  getProjectList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/projects');
  }

  deleteProject(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/projects/${id}`);
  }
}
