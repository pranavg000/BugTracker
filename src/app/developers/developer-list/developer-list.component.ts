import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer.model';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {
  developers: Developer[];
  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.developers = this.developerService.developers;
  }

}
