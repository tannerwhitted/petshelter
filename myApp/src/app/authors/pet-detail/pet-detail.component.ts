import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';

import { PetService } from '../../services';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input()
  pet: Pet;
  pets: Pet[] = [];

  constructor(
    private petService: PetService, //
    private route: ActivatedRoute,
    private router: Router) { }

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

  onDelete(pet: Pet) {
    console.log('deleting pet', pet);
    this.petService.removePet(pet._id).subscribe(deletedPet => {
      console.log('deleted pet', deletedPet);

      this.pets = this.pets.filter(
        currentPet => currentPet._id !== deletedPet._id
      );
      this.router.navigateByUrl('/');
    });
  }

  onEvent(pet: Pet): void {
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
  }
}
