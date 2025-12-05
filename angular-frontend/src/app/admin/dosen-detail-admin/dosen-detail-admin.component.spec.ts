import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenDetailAdminComponent } from './dosen-detail-admin.component';

describe('DosenDetailAdminComponent', () => {
  let component: DosenDetailAdminComponent;
  let fixture: ComponentFixture<DosenDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosenDetailAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosenDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
