import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeritaComponent } from './home-berita.component';

describe('HomeBeritaComponent', () => {
  let component: HomeBeritaComponent;
  let fixture: ComponentFixture<HomeBeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBeritaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
