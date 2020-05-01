import { Component, OnInit, OnDestroy } from '@angular/core';
import { Developer } from '../developer.model';
import { DeveloperService } from '../developer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit, OnDestroy {
  developers: Developer[];
  devServiceSubscription: Subscription;

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.devServiceSubscription = this.developerService.getDevelopers().subscribe((developers: Developer[]) => {
      this.developers = developers;
    });
  }

  ngOnDestroy(): void {
    this.devServiceSubscription.unsubscribe();
  }

}
