import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugStartComponent } from './bug-start.component';

describe('BugStartComponent', () => {
  let component: BugStartComponent;
  let fixture: ComponentFixture<BugStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
