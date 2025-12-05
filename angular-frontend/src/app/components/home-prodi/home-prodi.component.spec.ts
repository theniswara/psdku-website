import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdiComponent } from './home-prodi.component';

describe('HomeProdiComponent', () => {
  let component: HomeProdiComponent;
  let fixture: ComponentFixture<HomeProdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProdiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
