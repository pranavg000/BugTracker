import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer.model';
import { Subscription } from 'rxjs';
import { IDeveloperTemp } from '../developer-temp.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit, OnDestroy {

  id: string;
  developer: Developer;
  defValues = {
    fullName: "",
    email: ""
  };
  devServiceSubscription: Subscription;

  constructor(private route: ActivatedRoute, private developerService: DeveloperService, 
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id']; 
        if(this.devServiceSubscription)
        this.devServiceSubscription.unsubscribe();
        this.devServiceSubscription = this.developerService.getDeveloper(this.id).subscribe((data: IDeveloperTemp) => {
          this.developer = new Developer(this.id, data['fullName'],data['email']);
          this.defValues =  {
            fullName: this.developer.fullName,
            email: this.developer.email
          }
        });
      }
    )
  }

  async onSubmit(form: NgForm) {
    let value = form.value; 
    let valuesToUpload = {};
    if(value.email != this.developer.email) {
      valuesToUpload['email'] = value.email;
      this.authService.user.updateEmail(value.email);
    }
    if(value.fullName != this.developer.fullName) {
      valuesToUpload['fullName'] = value.fullName;
    }
    
    this.developerService.updateDeveloper(this.id, <IDeveloperTemp>value);
    // this.authService.user.updateEmail(value.email);
    let newId: string = this.id;
    form.reset();
    this.router.navigate(['/developers', newId])
  }

  ngOnDestroy(): void {
    if(this.devServiceSubscription)
      this.devServiceSubscription.unsubscribe();
  }

}
