import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLPComponent } from './plp.component';

describe('PlpComponent', () => {
  let component: PLPComponent;
  let fixture: ComponentFixture<PLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
