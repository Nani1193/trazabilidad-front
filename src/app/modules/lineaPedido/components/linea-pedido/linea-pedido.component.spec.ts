import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaPedidoComponent } from './linea-pedido.component';

describe('LineaPedidoComponent', () => {
  let component: LineaPedidoComponent;
  let fixture: ComponentFixture<LineaPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaPedidoComponent]
    });
    fixture = TestBed.createComponent(LineaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
