import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { StateKey, TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStateService {
  private isServer: boolean = false;

  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isServer = isPlatformServer(platformId);
  }

  getState(key: StateKey<string>, observable: Observable<any>, onError: Observable<any>, defaultValue: any = {}) {
    if(this.transferState) {
      return of(this.transferState.get(key, defaultValue));
    }
    return observable.pipe(
      catchError(() => onError),
      tap((data) => {
      if(this.isServer) {
        this.transferState.set(key, data);
      }
    }));
  }

  createStateKey(key: string) {
    return makeStateKey(key);
  }
}
