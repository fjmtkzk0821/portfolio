import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../breadcrumb/breadcrumb.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [BreadcrumbComponent, NgClass],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  @Input() header!: string;
  @Input() subheader!: string;
  @Input() backgroundInherit: boolean = false;
}
