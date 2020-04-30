import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer.model';
import { Subscription } from 'rxjs';
import { IDeveloperTemp } from '../developer-temp.interface';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit, OnDestroy {

  id: string;
  newUser: boolean;
  developer: Developer;
  defValues = {
    firstName: "",
    lastName: "",
    email: ""
  };
  devServiceSubscription: Subscription;

  constructor(private route: ActivatedRoute, private developerService: DeveloperService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.newUser = params['id'] == null;
        this.id = params['id'];
        if(!this.newUser){
          
          if(this.devServiceSubscription)
          this.devServiceSubscription.unsubscribe();
          this.devServiceSubscription = this.developerService.getDeveloper(this.id).subscribe((data: IDeveloperTemp) => {
            this.developer = new Developer(this.id, data['firstName'], data['lastName'], data['email']);
            this.defValues =  {
              firstName: this.developer.firstName,
              lastName: this.developer.lastName,
              email: this.developer.email
            }
          });
          
        }
      }
    )
  }

  async onSubmit(form: NgForm) {
    let value: {} = form.value; 
    let newId: string;
    if ( this.newUser ){  
      newId = await this.developerService.addNewDeveloper(<IDeveloperTemp>value);
    }
    else{
      this.developerService.updateDeveloper(this.id, <IDeveloperTemp>value);
      newId = this.id;
    }
    form.reset();
    this.router.navigate(['/developers', newId])
  }

  ngOnDestroy(): void {
    if(this.devServiceSubscription)
      this.devServiceSubscription.unsubscribe();
  }

}
