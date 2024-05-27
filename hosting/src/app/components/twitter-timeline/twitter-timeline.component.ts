import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-twitter-timeline',
  standalone: true,
  imports: [CommonModule],
  providers: [ScriptService],
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss'],
})
export class TwitterTimelineComponent implements AfterViewInit {
  constructor(private scriptService: ScriptService) {}
  ngAfterViewInit(): void {
    this.scriptService
      .load('twitterWidget')
      .then((data) => {
        console.log('script loaded ', data);
      })
      .catch((error) => console.log(error));
  }
}
