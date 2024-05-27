import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Archive } from 'src/app/model/archive';

@Component({
  selector: 'app-archive',
  standalone: true,
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  imports: [NgFor]
})
export class ArchiveComponent {
  @Input() archives!: Archive[];
}
