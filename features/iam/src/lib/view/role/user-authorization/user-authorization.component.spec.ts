import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAuthorizationComponent } from './user-authorization.component';

describe('UserAuthorizationComponent', () => {
  let component: UserAuthorizationComponent;
  let fixture: ComponentFixture<UserAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAuthorizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
