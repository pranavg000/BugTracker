import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer.model';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {

  id: number;
  newUser: boolean;
  defValues = {
    firstName: "",
    lastName: "",
    email: ""
  };

  constructor(private route: ActivatedRoute, private developerService: DeveloperService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.newUser = params['id'] == null;
        this.id = params['id'];
        if(!this.newUser){
          let developer: Developer = this.developerService.developers[this.id];
          this.defValues =  {
              firstName: developer.firstName,
              lastName: developer.lastName,
              email: developer.email
            }
        }
      }
    )
  }

  onSubmit(form: NgForm) {
    let value: {} = form.value; 
    let newId = -1;
    if ( this.newUser ){  
      newId = this.developerService.addNewDeveloper(new Developer(value['firstName'], value['lastName'], value['email']));
    }
    else{
      this.developerService.updateDeveloper(this.id, value);
      newId = this.id;
    }
    form.reset();
    this.router.navigate(['/developers', newId])
  }

}
