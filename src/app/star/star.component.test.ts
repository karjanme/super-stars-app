import { TestBed, async } from '@angular/core/testing';
import { StarComponent } from './star.component';

describe('StarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(StarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have title`, () => {
    const fixture = TestBed.createComponent(StarComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('star-component');
  });
});
