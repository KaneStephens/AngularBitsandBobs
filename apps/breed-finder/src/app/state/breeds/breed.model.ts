export interface BreedState {
  breedList: string[];
  breedDetails: BreedDetails | null;
  loading: boolean;
}

export interface BreedDetails {
  name: string;
  description: string;
  size: string;
  origin: string;
  lifeExpectancy: string;
  temperament: string[];
  image: string;
}
