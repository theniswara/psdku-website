import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRekapPresensiComponent } from './admin-rekap-presensi.component';

describe('AdminRekapPresensiComponent', () => {
  let component: AdminRekapPresensiComponent;
  let fixture: ComponentFixture<AdminRekapPresensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRekapPresensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRekapPresensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
