import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniapplyComponent } from './alumniapply.component';

describe('AlumniapplyComponent', () => {
  let component: AlumniapplyComponent;
  let fixture: ComponentFixture<AlumniapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
