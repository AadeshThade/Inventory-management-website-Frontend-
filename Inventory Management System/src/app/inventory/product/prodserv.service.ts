import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdservService {

  constructor(private _http:HttpClient) { }

  addProduct(data:any):Observable<any>{
    return this._http.post('http://192.168.29.163:8083/api/products',data);
  }

  updateProduct(id:number,data:any):Observable<any>{
    return this._http.put(`http://192.168.29.163:8083/api/products/${id}`,data);
  }

  getProductList():Observable<any>{
    return this._http.get('http://192.168.29.163:8083/api/products');
  }

  deleteProduct(id:number):Observable<any>{
    return this._http.delete(`http://192.168.29.163:8083/api/products/${id}`);
  }
}
