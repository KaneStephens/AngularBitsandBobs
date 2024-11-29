import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreedDetails } from './breed.model';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  public getBreedList(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/api/breed');
  }

  public getBreedDetails(name: string): Observable<BreedDetails> {
    return this.http.get<BreedDetails>(
      `http://localhost:3000/api/breed/${name}`
    );
  }
}
