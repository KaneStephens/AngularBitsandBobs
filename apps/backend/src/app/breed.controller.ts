import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { BreedService } from './breed.service';
import { Breed } from './breed.model';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  /* One possible improvement is to use a single endpoint to get all breeds and their details,
   using query params to control how much data is returned. Especially as the data we fetch grows
   in size, we can also handle pagination here too!
   
   eg, /breed?fields=name,description,size would only return the name, description, and size
   
   ideally it'd also be /breeds (plural) instead of singular!*/

  @Get()
  getBreeds(): string[] {
    return this.breedService.getAllBreeds();
  }

  @Get(':name')
  getBreedDetails(@Param('name') name: string): Breed {
    const breed = this.breedService.getBreedDetails(name);

    if (!breed) {
      throw new NotFoundException(`Breed with name "${name}" not found.`);
    }

    return breed;
  }
}
