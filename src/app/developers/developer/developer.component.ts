import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../developer.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  
  developer: Developer;
  id: number;
  constructor(private route: ActivatedRoute, private developerService: DeveloperService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.developer = this.developerService.developers[this.id];
      }
    )
  }

}
