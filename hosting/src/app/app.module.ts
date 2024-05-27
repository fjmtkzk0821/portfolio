import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { BlockSectionComponent } from './components/layout/block-section/block-section.component';
import { DefaultLayoutComponent } from './components/layout/default-layout/default-layout.component';
import { FullScreenNavComponent } from './components/layout/full-screen-nav/full-screen-nav.component';
import { SectionComponent } from './components/section/section.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogCarouselComponent } from './pages/blog/blog-carousel/blog-carousel.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RecentPostComponent } from './pages/blog/recent-post/recent-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotionCarouselComponent } from './pages/home/promotion-carousel/promotion-carousel.component';
import { WorksComponent } from './pages/works/works.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './pages/article/article.component';
import { ArchiveComponent } from './components/blog/archive/archive.component';
import { CategoriesComponent } from './components/blog/categories/categories.component';
import { RecentComponent } from './components/blog/recent/recent.component';
import { SearchSectionComponent } from './components/blog/search/search.component';
import { PostComponent } from './components/blog/post/post.component';
import { BasePageComponent } from './pages/base/base.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FullScreenNavComponent,
    AboutSectionComponent,
    HomeComponent,
    PromotionCarouselComponent,
    SectionComponent,
    BlogComponent,
    ContactComponent,
    WorksComponent,
    AboutComponent,
    FooterComponent,
    DefaultLayoutComponent,
    BlogCarouselComponent,
    BlockSectionComponent,
    RecentPostComponent,
    PostComponent,
    LoaderComponent,
    ArticleComponent,
    ArchiveComponent,
    CategoriesComponent,
    RecentComponent,
    SearchSectionComponent,
    BasePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
