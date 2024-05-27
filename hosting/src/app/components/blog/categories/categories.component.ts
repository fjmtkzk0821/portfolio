import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/model/tag';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [NgFor]
})
export class CategoriesComponent {
  @Input() tags!: Tag[];
}
