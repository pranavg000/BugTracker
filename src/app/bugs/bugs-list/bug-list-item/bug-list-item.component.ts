import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../../bug.model';
import { Status, Priority } from '../../dataTypes/enums';

@Component({
  selector: '[app-bug-list-item]',
  templateUrl: './bug-list-item.component.html',
  styleUrls: ['./bug-list-item.component.css']
})
export class BugListItemComponent implements OnInit {
  @Input() bug: Bug;
  @Input() index: number;

  status = Status;
  priority = Priority;

  constructor() { }

  ngOnInit(): void {
  }

}
