import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenDashboardComponent } from './dosen-dashboard.component';

describe('DosenDashboardComponent', () => {
  let component: DosenDashboardComponent;
  let fixture: ComponentFixture<DosenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosenDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
