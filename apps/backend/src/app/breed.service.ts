import { Injectable } from '@nestjs/common';
import { Breed } from './breed.model';
import breedList from '../assets/breed-list.json';

@Injectable()
export class BreedService {
  getAllBreeds(): string[] {
    const breedInfos: Breed[] = JSON.parse(JSON.stringify(breedList));
    return breedInfos.map((breedInfo) => breedInfo.name);
  }

  getBreedDetails(name: string): Breed {
    const breedInfos: Breed[] = JSON.parse(JSON.stringify(breedList));
    return breedInfos.find(
      (breedInfo) => breedInfo.name.toLowerCase() === name.toLowerCase()
    );
  }
}
