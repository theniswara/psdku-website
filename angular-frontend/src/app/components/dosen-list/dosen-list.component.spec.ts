import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenListComponent } from './dosen-list.component';

describe('DosenListComponent', () => {
  let component: DosenListComponent;
  let fixture: ComponentFixture<DosenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosenListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
