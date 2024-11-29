import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBreedDetails } from '../state/breeds/breed.actions';
import { BreedState } from '../state/breeds/breed.model';
import { BreedDetails } from '../state/breeds/breed.model';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  selector: 'app-breed-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class BreedDetailsComponent implements OnInit {
  breedDetails$: Observable<BreedDetails | null> = this.store.select(
    (state) => state.breedState.breedDetails
  );
  loading$: Observable<boolean> = this.store.select(
    (state) => state.breedState.loading
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ breedState: BreedState }>
  ) {}

  ngOnInit(): void {
    const breedName = this.route.snapshot.paramMap.get('name');
    if (breedName) {
      this.store.dispatch(getBreedDetails({ name: breedName }));
    }
  }
}
