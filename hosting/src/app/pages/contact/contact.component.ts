import { AfterViewInit, Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/layout/default-layout/default-layout.component";
import { TwitterTimelineComponent } from 'src/app/components/twitter-timeline/twitter-timeline.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { BasePageComponent } from '../base/base.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [DefaultLayoutComponent, TwitterTimelineComponent, FooterComponent]
})
export class ContactComponent extends BasePageComponent implements AfterViewInit {

  constructor(public override router: Router, public override loaderService: LoaderService) {
    super(router, loaderService);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.dismiss();
    }, 2000);
  }
}
