import { AfterViewInit, Component } from '@angular/core';
import { PromotionCarouselComponent } from './promotion-carousel/promotion-carousel.component';
import { SectionComponent } from '../../components/section/section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TwitterTimelineComponent } from 'src/app/components/twitter-timeline/twitter-timeline.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LoaderService } from 'src/app/services/loader.service';
import { NavigationExtras, Router } from '@angular/router';
import { TypewriterComponent } from 'src/app/components/common/typewriter/typewriter.component';
import { BasePageComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PromotionCarouselComponent,
    SectionComponent,
    AboutSectionComponent,
    TwitterTimelineComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasePageComponent implements AfterViewInit {

  constructor(public override router: Router, public override loaderService: LoaderService) {
    super(router, loaderService);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.dismiss();
    }, 2000);
  }
}
