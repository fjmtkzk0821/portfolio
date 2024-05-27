import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'blog-section-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [PostComponent, NgFor]
})
export class SearchSectionComponent {
  @Input() articles!: Article[];
  @Input() queryParams!: { tag: string, archive: string };

  get resultMessage() {
    const arr = [];
    if (this.queryParams.tag.length > 0) {
      arr.push(`'${this.queryParams.tag}'`);
    }
    if (this.queryParams.archive.length > 0) {
      arr.push(`'${this.queryParams.archive}'`);
    }
    return `${this.articles.length} article(s) ${arr.length > 0 ? "related to" : ""} ${arr.join(" and ")} are found.`;
  }
}
