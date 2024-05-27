import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/components/layout/default-layout/default-layout.component';
import { LoaderService } from 'src/app/services/loader.service';
import { BlogService } from 'src/app/services/api/blog.service';
import { Article } from 'src/app/model/article';
import { NgIf } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BasePageComponent } from '../base/base.component';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [NgIf, DefaultLayoutComponent, FooterComponent],
})
export class ArticleComponent extends BasePageComponent implements AfterViewInit {
  id!: string;
  article?: Article;

  constructor(
    public override router: Router,
    private route: ActivatedRoute,
    public override loaderService: LoaderService,
    private blogService: BlogService
  ) {
    super(router, loaderService);
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
  }

  ngAfterViewInit(): void {

    this.blogService
      .getArticle(this.id)
      .subscribe((data) => {
        this.article = data.article;
        setTimeout(() => {
          this.loaderService.dismiss();
        }, 500);
      });
  }
}
