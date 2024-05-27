import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/app/model/work';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }

  public get(): Observable<{ works: Work[] }> {
    return this.http.get<{ works: Work[] }>(`${environment.apiUrl}/work`);
  }
}
