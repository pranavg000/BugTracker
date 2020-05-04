import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Developer } from '../developer.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Subscription } from 'rxjs';
import { IDeveloperTemp } from '../developer-temp.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit, OnDestroy {
  
  developer: Developer;
  id: string;
  devServiceSubscription: Subscription;
  constructor(private route: ActivatedRoute, private developerService: DeveloperService, public authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if(this.devServiceSubscription)
          this.devServiceSubscription.unsubscribe();
        this.devServiceSubscription = this.developerService.getDeveloper(this.id).subscribe((data: IDeveloperTemp) => {
          this.developer = new Developer(this.id, data['fullName'], data['email']);
        });
      }
    )
  }

  ngOnDestroy(): void {
    this.devServiceSubscription.unsubscribe();
  }

}
