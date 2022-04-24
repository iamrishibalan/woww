import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private TransferData = new Subject<any>();

    publishSomeData(data: any) {
        this.TransferData.next(data);
    }

    getObservable(): Subject<any> {
        return this.TransferData;
    }
}
