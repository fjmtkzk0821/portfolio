import { AfterViewInit, Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/layout/default-layout/default-layout.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BlockSectionComponent } from 'src/app/components/layout/block-section/block-section.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { NavigationExtras, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { InstagramEmbedComponent } from 'src/app/components/instagram-embed/instagram-embed.component';
import { NgFor, NgIf } from '@angular/common';
import { Article } from 'src/app/model/article';
import { BlogService } from 'src/app/services/api/blog.service';
import { Tag } from 'src/app/model/tag';
import { Archive } from 'src/app/model/archive';
import { ArchiveComponent } from 'src/app/components/blog/archive/archive.component';
import { CategoriesComponent } from 'src/app/components/blog/categories/categories.component';
import { RecentComponent } from 'src/app/components/blog/recent/recent.component';
import { NoContentBlockComponent } from 'src/app/components/common/no-content-block/no-content-block.component';
import { BasePageComponent } from '../base/base.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [
    NgFor,
    DefaultLayoutComponent,
    BlogCarouselComponent,
    FooterComponent,
    BlockSectionComponent,
    RecentPostComponent,
    InstagramEmbedComponent,
    ArchiveComponent,
    CategoriesComponent,
    RecentComponent,
    NoContentBlockComponent,
    NgIf
  ],
})
export class BlogComponent extends BasePageComponent implements AfterViewInit {
  articles: Article[] = [];
  tags: Tag[] = [];
  archives: Archive[] = [];

  constructor(
    public override router: Router,
    public override loaderService: LoaderService,
    private blogService: BlogService,
  ) {
    super(router, loaderService);
  };

  ngAfterViewInit(): void {
    this.blogService.get().subscribe((data) => {
      this.articles = data.articles;
      this.tags = data.tags;
      this.archives = data.archives;
      setTimeout(() => {
        this.loaderService.dismiss();
      }, 500)
    });
  }
}
