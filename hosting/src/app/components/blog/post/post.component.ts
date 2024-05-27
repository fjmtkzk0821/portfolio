import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [CommonModule, NgFor, RouterLink]
})
export class PostComponent {
  @Input() article !: Article;
}
