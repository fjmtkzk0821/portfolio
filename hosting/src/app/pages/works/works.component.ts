import { AfterViewInit, Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/layout/default-layout/default-layout.component";
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { WorkItemDefaultComponent } from './work-item-default/work-item-default.component';
import { NavigationExtras, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { Work } from 'src/app/model/work';
import { CommonModule } from '@angular/common';
import { WorkService } from 'src/app/services/api/work.service';
import { Subject } from 'rxjs';
import { WORK_TYPE_LIB } from 'src/app/assets/const.store';
import { NoContentBlockComponent } from 'src/app/components/common/no-content-block/no-content-block.component';
import { BasePageComponent } from '../base/base.component';

@Component({
  selector: 'app-works',
  standalone: true,
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: [CommonModule, DefaultLayoutComponent, WorkItemDefaultComponent, FooterComponent, NoContentBlockComponent]
})
export class WorksComponent extends BasePageComponent implements AfterViewInit {
  readonly types = WORK_TYPE_LIB;
  works: Work[] = [];
  filtered: Work[] = [];
  selectedType: number = 1;
  selectedTypeSubject: Subject<number> = new Subject();

  constructor(public override router: Router, public override loaderService: LoaderService, private workService: WorkService) {
    super(router, loaderService);
    this.selectedTypeSubject.subscribe((type) => {
      this.filtered = this.works.filter((_) => _.type % type == 0);
    });
    this.selectedTypeSubject.subscribe((type) => {
      this.selectedType = type;
    })
  }

  ngAfterViewInit(): void {
    this.workService.get().subscribe((data) => {
      this.works = data.works;
      this.filtered = data.works;
      setTimeout(() => {
        this.loaderService.dismiss();
      }, 500);
    });
  }

  filter(type: number): void {
    this.selectedTypeSubject.next(type);
  }
}
