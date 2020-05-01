import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Status, Priority } from '../dataTypes/enums';
import { BugService } from '../bug.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  status_ = Status;
  cntStatus = [0, 1, 2, 3]

  priority_ = Priority;
  cntPriority = [0, 1, 2]

  uploadPercent;

  constructor(private router: Router, private bugService: BugService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm, event) {
    let formValue = form.value;
    const screenshotUrl = this.generateScreenShotUrl();
    formValue['screenshot'] = screenshotUrl
    console.log(form, event.target[4].files[0]);
    await this.fileUpload(screenshotUrl, event.target[4].files[0]);
    let newId: string = await this.bugService.addNewBug(formValue);
    this.router.navigate(['/bugs', newId])
  }

  generateScreenShotUrl():string {
    return "bug_screenshots/"+Math.random().toString(36).substring(2);
  }

  fileUpload(filePath, file) {
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
  }

}
