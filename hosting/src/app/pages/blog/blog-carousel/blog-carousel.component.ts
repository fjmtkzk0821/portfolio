import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent {
  images = [0,1].map(i => `assets/images/cb-${i}.jpg`);
}
