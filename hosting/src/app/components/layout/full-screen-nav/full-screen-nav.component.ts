import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BasePageComponent } from 'src/app/pages/base/base.component';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-full-screen-nav',
  standalone: true,
  imports: [NgbCollapseModule, RouterModule, NgFor],
  templateUrl: './full-screen-nav.component.html',
  styleUrls: ['./full-screen-nav.component.scss'],
})
export class FullScreenNavComponent extends BasePageComponent {
  isCollapsed: boolean = true;
  readonly paths = ['home', 'about', 'works', 'blog', 'contact'];

  constructor(public override router: Router, public override loaderService: LoaderService) {
    super(router, loaderService);
  }

  navigateTo(path: string) {
    if (
      !this.router.isActive(path, {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      })
    ) {
      this.navigate([`/${path}`]);
      setTimeout(() => this.isCollapsed = true, 1000);
    } else {
      this.isCollapsed = true;
    }
  }
}
