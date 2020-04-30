import { Component, OnInit, OnDestroy } from '@angular/core';
import { Developer } from '../developer.model';
import { DeveloperService } from '../developer.service';
import { AngularFirestore } from '@angular/fire/firestore';
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
    this.devServiceSubscription = this.developerService.developersChanged.subscribe((developers: Developer[]) => {
      this.developers = developers;
    })
  }

  ngOnDestroy(): void {
    this.devServiceSubscription.unsubscribe();
  }

}
