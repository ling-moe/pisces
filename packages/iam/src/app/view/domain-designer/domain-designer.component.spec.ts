import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainDesignerComponent } from './domain-designer.component';

describe('DomainDesignerComponent', () => {
  let component: DomainDesignerComponent;
  let fixture: ComponentFixture<DomainDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainDesignerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
