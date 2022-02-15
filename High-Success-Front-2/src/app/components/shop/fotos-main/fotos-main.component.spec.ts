import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosMainComponent } from './fotos-main.component';

describe('FotosMainComponent', () => {
  let component: FotosMainComponent;
  let fixture: ComponentFixture<FotosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
