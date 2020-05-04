import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BugService } from '../bug.service';
import { Bug } from '../bug.model';
import { Routes, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBug } from '../bug-temp.interface';

@Component({
  selector: 'app-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})
export class BugsListComponent implements OnInit, OnDestroy {

  bugs: Bug[];
  inDev: boolean = false;
  bugServiceSubscription: Subscription;
  constructor(private bugService: BugService, private route: ActivatedRoute, public authService: AuthService) { }

  ngOnInit(): void {
    let devID = this.route.snapshot.params['id']
    if(devID) {
      this.inDev = true;
      this.route.params.subscribe((params: Params) => {
        if(this.bugServiceSubscription) this.bugServiceSubscription.unsubscribe();
        this.bugServiceSubscription = this.bugService.getBugsDev(params['id']).subscribe((bugs: Bug[]) => {
          this.bugs = bugs;
        })
      });
      
    }
    else 
      this.bugServiceSubscription = this.bugService.getBugs().subscribe((bugs: Bug[]) => {
        this.bugs = bugs;
      })
  }

  ngOnDestroy(): void {
    this.bugServiceSubscription.unsubscribe();
  }

}
