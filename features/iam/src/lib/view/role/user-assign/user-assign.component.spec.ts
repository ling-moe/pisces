import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAssignComponent } from './user-assign.component';

describe('UserAuthorizationComponent', () => {
  let component: UserAssignComponent;
  let fixture: ComponentFixture<UserAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAssignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
