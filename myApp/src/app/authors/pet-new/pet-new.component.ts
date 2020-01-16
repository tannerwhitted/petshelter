import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet';
import { NgForm } from '@angular/forms';

import { PetService } from '../../services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet = new Pet();

  @Output()
  createPet = new EventEmitter<Pet>();

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.petService.createPet(this.pet)
      .subscribe(createdPet => {
        console.log(createdPet);
        this.pet = new Pet();
        form.reset();

        this.router.navigateByUrl('/');
      });


  }

}
