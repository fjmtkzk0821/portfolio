import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-promotion-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './promotion-carousel.component.html',
  styleUrls: ['./promotion-carousel.component.scss']
})
export class PromotionCarouselComponent {
  images = [0,1].map(i => `assets/images/cb-${i}.jpg`);
}
