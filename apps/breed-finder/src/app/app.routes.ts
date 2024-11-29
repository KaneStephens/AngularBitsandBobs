import { Route } from '@angular/router';
import { OverviewPageComponent } from './overview/overview.page';
import { BreedDetailsComponent } from './details/details.page';

export const appRoutes: Route[] = [
  { path: 'breed/:name', component: BreedDetailsComponent },
  { path: '', component: OverviewPageComponent },
];
