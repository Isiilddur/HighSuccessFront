import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesMainComponent } from './clothes-main.component';

describe('ClothesMainComponent', () => {
  let component: ClothesMainComponent;
  let fixture: ComponentFixture<ClothesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
