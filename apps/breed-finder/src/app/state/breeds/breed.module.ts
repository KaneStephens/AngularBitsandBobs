import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedService } from './breed.service';
import { BreedDetailsComponent } from '../../details/details.page';
import { OverviewPageComponent } from '../../overview/overview.page';

@NgModule({
  declarations: [BreedDetailsComponent, OverviewPageComponent],
  imports: [CommonModule],
  providers: [BreedService],
})
export class BreedModule {}
