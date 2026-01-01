import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmbComponent } from './pmb.component';

describe('PmbComponent', () => {
  let component: PmbComponent;
  let fixture: ComponentFixture<PmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
