import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperStartComponent } from './developer-start.component';

describe('DeveloperStartComponent', () => {
  let component: DeveloperStartComponent;
  let fixture: ComponentFixture<DeveloperStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
