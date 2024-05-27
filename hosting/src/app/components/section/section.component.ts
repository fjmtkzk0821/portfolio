import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() header: string = '';
}
