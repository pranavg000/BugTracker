import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../../developer.model';

@Component({
  selector: 'app-developer-list-item',
  templateUrl: './developer-list-item.component.html',
  styleUrls: ['./developer-list-item.component.css']
})
export class DeveloperListItemComponent implements OnInit {
  @Input() developer: Developer;
  @Input() index: string;
  constructor() { }

  ngOnInit(): void {
  }

}
