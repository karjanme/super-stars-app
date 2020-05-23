import { Component } from '@angular/core';
import { StarColor } from './star/StarColor';
import { StarDefinition } from './star/StarDefinition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-stars-app';

  definitionStars: StarDefinition[] = [
    {
      category: 'BIG',
      color: StarColor.Blue
    },
    {
      category: 'small',
      color: StarColor.Green
    },
    {
      category: 'Medium',
      color: StarColor.Mint
    }
  ];
}
