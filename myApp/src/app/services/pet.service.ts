import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';

import { Pet } from '../models/pet';
@Injectable({
  providedIn: 'root'
})
export class PetService {
  // private baseurl = 'http://5dcebc3175f9360014c262d3.mockapi.io/Pets/Pets';
  private readonly baseurl = '/api/pets';


  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseurl);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseurl, pet);
  }

  getPet(petId: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseurl}/${petId}`);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseurl}/${pet._id}`, pet);
  }

  removePet(petId: string): Observable<Pet> {
    return this.http.delete<Pet>(`${this.baseurl}/${petId}`);
  }
}
