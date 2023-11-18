import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberToTeamComponent } from './add-member-to-team.component';

describe('AddMemberToTeamComponent', () => {
  let component: AddMemberToTeamComponent;
  let fixture: ComponentFixture<AddMemberToTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMemberToTeamComponent]
    });
    fixture = TestBed.createComponent(AddMemberToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
