import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-section',
  standalone: true,
  templateUrl: './block-section.component.html',
  styleUrls: ['./block-section.component.scss']
})
export class BlockSectionComponent {
  @Input() header: string = "";
}
