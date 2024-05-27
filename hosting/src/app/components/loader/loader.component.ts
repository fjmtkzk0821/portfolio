import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnDestroy {
  isLoading: boolean = true;
  isNature: boolean = true;
  private readonly destroy$: Subject<unknown> = new Subject();

  constructor(service: LoaderService) {
    service.isLoading.pipe(takeUntil(this.destroy$)).subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
    service.isNature.pipe(takeUntil(this.destroy$)).subscribe((isNature: boolean) => {
      this.isNature = isNature;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
