import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-recent',
  standalone: true,
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
  imports: [PostComponent, NgFor]
})
export class RecentComponent {
  @Input() articles!: Article[];
}
