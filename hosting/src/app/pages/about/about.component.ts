import { AfterViewInit, Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DefaultLayoutComponent } from 'src/app/components/layout/default-layout/default-layout.component';
import { PageSectionComponent } from 'src/app/components/page-section/page-section.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { NgFor } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    FooterComponent,
    PageSectionComponent,
    ServiceCardComponent,
    NgFor
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  readonly langFrameList: Array<string> = [
    'angularjs',
    'android',
    'bootstrap',
    'css3',
    'dart',
    'firebase',
    'flutter',
    'html5',
    'javascript',
    'kotlin',
    'laravel',
    'materialui',
    'mongodb',
    'nodejs',
    'php',
    'python',
    'react',
    'spring',
    'typescript',
    'vuejs'
  ];

  constructor(private loaderService: LoaderService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.dismiss();
    }, 2000);
  }
}
