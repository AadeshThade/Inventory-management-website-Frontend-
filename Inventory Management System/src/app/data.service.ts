// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private warehouseNameSource = new BehaviorSubject<string>('');
  currentWarehouseName = this.warehouseNameSource.asObservable();

  constructor() {}

  changeWarehouseName(name: string) {
    this.warehouseNameSource.next(name);
  }
}