import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work } from 'src/app/model/work';

@Component({
  selector: 'work-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-item-default.component.html',
  styleUrls: ['./work-item-default.component.scss']
})
export class WorkItemDefaultComponent {
  @Input() work!: Work;
}
