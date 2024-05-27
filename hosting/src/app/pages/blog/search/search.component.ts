import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from 'src/app/components/blog/archive/archive.component';
import { CategoriesComponent } from 'src/app/components/blog/categories/categories.component';
import { RecentComponent } from 'src/app/components/blog/recent/recent.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { InstagramEmbedComponent } from 'src/app/components/instagram-embed/instagram-embed.component';
import { BlockSectionComponent } from 'src/app/components/layout/block-section/block-section.component';
import { DefaultLayoutComponent } from 'src/app/components/layout/default-layout/default-layout.component';
import { BlogCarouselComponent } from '../blog-carousel/blog-carousel.component';
import { RecentPostComponent } from '../recent-post/recent-post.component';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Archive } from 'src/app/model/archive';
import { Article } from 'src/app/model/article';
import { Tag } from 'src/app/model/tag';
import { BlogService } from 'src/app/services/api/blog.service';
import { LoaderService } from 'src/app/services/loader.service';
import { SearchSectionComponent } from 'src/app/components/blog/search/search.component';
import { BasePageComponent } from '../../base/base.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLayoutComponent,
    BlogCarouselComponent,
    FooterComponent,
    BlockSectionComponent,
    RecentPostComponent,
    InstagramEmbedComponent,
    ArchiveComponent,
    CategoriesComponent,
    RecentComponent,
    SearchSectionComponent
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends BasePageComponent implements OnInit, AfterViewInit {
  queryParams: { tag: string, archive: string };
  articles: Article[] = [];
  tags: Tag[] = [];
  archives: Archive[] = [];

  constructor(
    public override router: Router,
    private route: ActivatedRoute,
    public override loaderService: LoaderService,
    private blogService: BlogService,
  ) {
    super(router, loaderService);
    this.queryParams = { tag: '', archive: '' };
  }

  ngOnInit(): void {
    this.queryParams = {
      tag: this.route.snapshot.queryParams["tag"] ?? '',
      archive: this.route.snapshot.queryParams["archive"] ?? ''
    };
  }

  ngAfterViewInit(): void {
    this.blogService.search(
      this.queryParams.tag,
      this.queryParams.archive
    ).subscribe((data) => {
      this.articles = data.articles;
      this.tags = data.tags;
      this.archives = data.archives;
      setTimeout(() => {
        this.loaderService.dismiss();
      }, 500)
    });
  }
}
