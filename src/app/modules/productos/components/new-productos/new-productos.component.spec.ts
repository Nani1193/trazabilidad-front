import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductosComponent } from './new-productos.component';

describe('NewProductosComponent', () => {
  let component: NewProductosComponent;
  let fixture: ComponentFixture<NewProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductosComponent]
    });
    fixture = TestBed.createComponent(NewProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
