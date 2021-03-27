import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }


  public getContacts(): Observable<any> {
    return this.http.get(`${environment.url}/contact`);
  }

  public deleteContacts(id: any): Observable<any> {
    return this.http.delete(`${environment.url}/contact/${id}`);
  }

  public saveContact(contact: { id: any; name: any; description: any; email: any; }): Observable<any> {
    return this.http.post(`${environment.url}/contact`, contact);
  }

}
