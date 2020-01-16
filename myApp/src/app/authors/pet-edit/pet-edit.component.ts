import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { PetService } from '../../services';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.petService.getPet(id)),
      )
      .subscribe(pet => {
        console.log('pet from api', pet);
        this.pet = pet;
      }
    );
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.petService.updatePet(this.pet)
      .subscribe(createdPet => {
        console.log(createdPet);
        this.pet = new Pet();
        form.reset();

        this.router.navigateByUrl('/');
      });


  }

}

