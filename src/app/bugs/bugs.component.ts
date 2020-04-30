import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Bug } from './bug.model';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit, OnDestroy {
  bugs: Bug[];
  fireStoreSubscription: Subscription;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.fireStoreSubscription = this.firestore.collection('bugs').valueChanges({idField: 'id'}).subscribe((data: Bug[]) => {
      this.bugs = data;
    });
  }

  ngOnDestroy(): void {
    this.fireStoreSubscription.unsubscribe();
  }

}
