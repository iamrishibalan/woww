import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONST } from '../../apiservice/api.constant';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  api = CONST.API;

  _headers: HttpHeaders;
  _httpOptions = {};

  constructor(private http: HttpClient) {
    this._httpOptions = {
    };
  }

  public getToken() {
    const token = localStorage.getItem("SESSION_NAME");
    if (token !== undefined || token !== null || token !== '') {
      return JSON.parse(token) ? JSON.parse(JSON.parse(token)) : null;
    }
    return null;
  }

  /* [ Filter the Object in URI ] */
  private objToQueryString(obj) {
    const k = Object.keys(obj);
    let s = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < k.length; i++) {
      s += k[i] + encodeURIComponent(':') + encodeURIComponent(obj[k[i]]) + encodeURIComponent(',');
    }
    if (s) {
      return encodeURIComponent('{') + s + encodeURIComponent('}');
    }
  }

  /* [ Filters ] */
  private encodURIParams(params: any): string {
    return Object.keys(params).map((key) => {
      if (key !== 'filter') {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }
    }).join('&');
  }

  formUrlParam(url, data) {
    // tslint:disable-next-line:ban-types
    let queryString: String = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }

  /*
   * Method - GET
   */

  getAll(url, params = null) {
    if (params !== null) {
      url = url + '?';
      if (this.encodURIParams(params) !== '') {
        url = url + this.encodURIParams(params);
      }
      if (params.filter !== undefined) {
        url = url + 'filter=' + this.objToQueryString(params.filter);
      }
    }
    return this.http
      .get(this.api +  url, this._httpOptions)
      .pipe(map((response: any) => response))
  }

  getExternal(url, params = null) {
    return this.http
      .get(url, this._httpOptions)
      .pipe(map((response: any) => response))
  }

  /*
   * Method - POST
   * param  - Passing Input Values in the {}
   */
  create(url: string, param: any): Observable<any> {
    return this.http
      .post(this.api +  url, (param), this._httpOptions)
      .pipe(map((response: any) => response))
  }

  /*
   * Method - PUT
   * param  - Passing Input Values in the {}
   */
  update(url: string, param: any): Observable<any> {
    return this.http
      .put(this.api +  url, param, this._httpOptions)
      .pipe(map((response: any) => response.json()))
  }

  /*
   * Method - DELETE
   * param  - Passing Input Values in the {}
   */
  delete(url: string): Observable<any> {
    return this.http
      .delete(this.api +  url, this._httpOptions)
      .pipe(map((response: any) => response.json()))
  }

  fileUpload(url: string, formData: any): Observable<any> {
    this._httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        // 'Accept' : 'application/json'
      }),
      withCredentials: true,
      reportProgress: true,
    };
    return this.http.
      post(this.api +  url, formData, this._httpOptions)
      .pipe(map((response: any) => response.json()));
  }

  fileDownload(url: string): Observable<any> {
    this._httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/pdf'
      }),
      withCredentials: true,
      responseType: 'blob'
    };
    return this.http
      .get(this.api +  url, this._httpOptions)
      .pipe(map((response: any) => response.json()));
  }
}