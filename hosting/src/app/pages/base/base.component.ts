import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BlogService } from 'src/app/services/api/blog.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-base-page',
  standalone: true,
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BasePageComponent {
  constructor(
    public router: Router,
    public loaderService: LoaderService,
  ) { };

  async navigate(commands: any[], extras?: NavigationExtras | undefined): Promise<void> {
    await this.loaderService.fireWithDelayProcess();
    this.router.navigate(commands, extras);
  }
}
