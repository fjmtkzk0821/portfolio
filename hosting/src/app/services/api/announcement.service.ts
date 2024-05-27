import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/model/announcement';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private readonly route: string = 'announcement';
  constructor(private http: HttpClient) {}

  public getLatest(index: number): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(
      `${environment.apiUrl}/${this.route}/latest/${index}`
    );
  }
  public getArticle(id: string): Observable<Announcement> {
    return this.http.get<Announcement>(
      `${environment.apiUrl}/${this.route}/${id}`
    );
  }
}
