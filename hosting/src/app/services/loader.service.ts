import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const DELAY_DEFAULT = 1500;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: Subject<boolean> = new Subject<boolean>();
  public isNature: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  fire() {
    this.isLoading.next(true);
  }

  dismiss() {
    this.isLoading.next(false);
  }

  async fireWithDelayProcess() {
    this.fire();
    this.isNature.next(false);
    return new Promise((resolve) => setTimeout(() => {
      document.querySelector('.main-container')?.scrollTo({ top: 0 });
      setTimeout(() => this.isNature.next(true), 250);
      resolve(undefined);
    }, DELAY_DEFAULT));
  }
}
