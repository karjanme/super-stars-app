import {
  Component,
  Input,
} from '@angular/core';
import {
  StarColor,
  StarColorValueMap,
} from './StarColor';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  title = 'star-component';
  private starColor: StarColor;
  @Input() text: string;

  @Input('color')
  set color(inputColor: string) {
    this.starColor = this.getColorFromInput(inputColor);
  }

  get color(): string {
    return this.starColor;
  }

  private getColorFromInput = (input: string): StarColor => {
    console.log(input);
    if (input) {
      if (input.startsWith('#') && input.length === 7) {
        const starColor: StarColor | undefined = StarColorValueMap.get(input);
        if (starColor) {
          return starColor;
        }
      }

      switch (input.toUpperCase()) {
        case 'BLUE':
          return StarColor.Blue;
        case 'GREEN':
          return StarColor.Green;
        case 'MINT':
          return StarColor.Mint;
        case 'PINK':
          return StarColor.Pink;
        case 'PURPLE':
          return StarColor.Purple;
        case 'YELLOW':
          return StarColor.Yellow;
      }
    }
    console.warn('No matching star color found');
    return StarColor.Black;
  }

}
