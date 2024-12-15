import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDesignerComponent } from './designer.component';

describe('DomainDesignerComponent', () => {
  let component: ProductDesignerComponent;
  let fixture: ComponentFixture<ProductDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDesignerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
