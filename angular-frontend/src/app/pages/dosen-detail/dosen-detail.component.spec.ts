import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenDetailComponent } from './dosen-detail.component';

describe('DosenDetailComponent', () => {
  let component: DosenDetailComponent;
  let fixture: ComponentFixture<DosenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosenDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
