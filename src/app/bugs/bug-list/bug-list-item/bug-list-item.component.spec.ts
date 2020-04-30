import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListItemComponent } from './bug-list-item.component';

describe('BugListItemComponent', () => {
  let component: BugListItemComponent;
  let fixture: ComponentFixture<BugListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
