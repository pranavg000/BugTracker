import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bug } from './bug.model';
import { BugService } from './bug.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit, OnDestroy {
  bugs: Bug[];
  bugServiceSubscription: Subscription;
  constructor(private bugService: BugService) { }

  ngOnInit(): void {
    this.bugs = this.bugService.getBugs();
    this.bugServiceSubscription = this.bugService.bugsChanged.subscribe((bugs: Bug[]) => {
      this.bugs = bugs;
    })
  }

  ngOnDestroy(): void {
    this.bugServiceSubscription.unsubscribe();
  }

}
