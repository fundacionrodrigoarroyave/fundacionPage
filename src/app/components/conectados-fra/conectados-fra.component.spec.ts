import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectadosFraComponent } from './conectados-fra.component';

describe('ConectadosFraComponent', () => {
  let component: ConectadosFraComponent;
  let fixture: ComponentFixture<ConectadosFraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectadosFraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectadosFraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
