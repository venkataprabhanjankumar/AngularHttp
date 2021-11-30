import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualscrollingComponent } from './virtualscrolling.component';

describe('VirtualscrollingComponent', () => {
  let component: VirtualscrollingComponent;
  let fixture: ComponentFixture<VirtualscrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualscrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualscrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
