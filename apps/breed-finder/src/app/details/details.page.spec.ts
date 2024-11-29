import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { BreedDetailsComponent } from './details.page';
import { of } from 'rxjs';
import { BreedState } from '../state/breeds/breed.model';
import { breedReducer } from '../state/breeds/breed.reducer';

describe('BreedDetailsComponent', () => {
  let component: BreedDetailsComponent;
  let fixture: ComponentFixture<BreedDetailsComponent>;
  let store: Store<{ breedState: BreedState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // I'll be very honest, i couldn't resolve an error here and let copilot take the wheel for these imports!
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('breedState', breedReducer as any),
      ],
      declarations: [BreedDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Loading breed details..." when loading', () => {
    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(true));

    fixture.detectChanges();

    const loadingText = fixture.nativeElement.querySelector('p');
    expect(loadingText.textContent).toContain('Loading breed details...');
  });

  it('should display breed details when data is loaded', () => {
    const breedDetails = {
      name: 'Bulldog',
      description: 'A friendly dog.',
      size: 'Medium',
      origin: 'England',
      lifeExpectancy: '10 years',
      temperament: ['Friendly', 'Loyal'],
      image: 'bulldog_image_url',
    };

    spyOn(store, 'select').and.returnValue(of(breedDetails));

    fixture.detectChanges();

    const name = fixture.nativeElement.querySelector('h1');
    const description = fixture.nativeElement.querySelector(
      '.breed-details__description'
    );

    expect(name.textContent).toContain('Bulldog');
    expect(description.textContent).toContain('A friendly dog.');
  });
});
