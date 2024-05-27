import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-instagram-embed',
  standalone: true,
  imports: [CommonModule],
  providers: [ScriptService],
  templateUrl: './instagram-embed.component.html',
  styleUrls: ['./instagram-embed.component.scss']
})
export class InstagramEmbedComponent implements AfterViewInit {
  constructor(private scriptService: ScriptService) {}
  ngAfterViewInit(): void {
    this.scriptService
      .load('instagramWidget')
      .then((data) => {
        console.log('script loaded ', data);
      })
      .catch((error) => console.log(error));
  }
}
