import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bug } from '../bug.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { BugService } from '../bug.service';
import { IBug } from '../bug-temp.interface';
import { Status, Priority } from '../dataTypes/enums';
import { DeveloperService } from 'src/app/developers/developer.service';
import { Developer } from 'src/app/developers/developer.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit, OnDestroy {
  bug: Bug;
  id: string;
  status = Status;
  priority = Priority;
  bugServiceSubscription: Subscription;
  devServiceSubscription: Subscription;

  cntStatus: number[] = [0, 1, 2, 3]
  statusChanged = false;

  developers: Developer[];
  newDevAssigned = false;
  newDevName: string = "Not Assigned";
  newDeveloper: Developer;
  screenshotUrl;
  constructor(private route: ActivatedRoute, private bugService: BugService, 
              private developerService: DeveloperService, private storage: AngularFireStorage ) { }

  ngOnInit(): void {
    this.devServiceSubscription = this.developerService.getDevelopers().subscribe((developers: Developer[]) => {
      this.developers = developers;
    });
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if(this.bugServiceSubscription)
          this.bugServiceSubscription.unsubscribe();
        this.bugServiceSubscription = this.bugService.getBug(this.id).subscribe((data: unknown) => {
          data['id'] = this.id;
          this.bug = new Bug(<IBug> data);
          // console.log(this.bug);
          if(this.bug.screenshot)
            this.screenshotUrl = this.storage.ref(this.bug.screenshot).getDownloadURL();
        });
      }
    );
  }

  onNewDevAssigned(dev: Developer) {
    this.newDevAssigned = true;
    this.newDevName = dev.firstName + " " + dev.lastName;
    this.newDeveloper = dev;
  }

  onChangeStatusFrontend(newStatus) {
    this.bug.status = newStatus;
    this.statusChanged = true;
  }

  onChangeStatus(newStatus: number) {
    this.onChangeStatusFrontend(newStatus);
  }



  ngOnDestroy(): void {
    this.bugServiceSubscription.unsubscribe();
    this.devServiceSubscription.unsubscribe();
  }

  async onSaveClick() {
    await this.bugService.updateBug(this.statusChanged, this.newDevAssigned, this.bug.status, this.newDeveloper);
    this.newDevAssigned = false;
    this.statusChanged = false;
  }


}
