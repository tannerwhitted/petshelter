import { Component, OnInit } from '@angular/core';

import { Pet } from '../../models/pet';

import { PetService } from '../../services';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  onCreate(pet: Pet) {

    console.log('creating Pet', pet);

    this.petService.createPet(pet)
      .subscribe(createdPet => {
        console.log('created pet', pet);
        this.pets.push(createdPet);
      });
    }

  onUpdate(pet: Pet) {
    console.log('update pet', pet);
    this.petService.updatePet(pet).subscribe(selectedPet => {
      console.log('should update');
    });
  }
  onDelete(pet: Pet) {
    console.log('deleting pet', pet);
    this.petService.removePet(pet._id).subscribe(deletedPet => {
      console.log('deleted pet', deletedPet);

      this.pets = this.pets.filter(
        currentPet => currentPet._id !== deletedPet._id
      );
    });
  }

  onEvent(pet: Pet): void {
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
  }
}
