import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurikulumComponent } from './kurikulum.component';

describe('KurikulumComponent', () => {
  let component: KurikulumComponent;
  let fixture: ComponentFixture<KurikulumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KurikulumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurikulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
