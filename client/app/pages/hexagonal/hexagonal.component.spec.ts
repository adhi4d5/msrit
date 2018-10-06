import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalComponent } from './hexagonal.component';

describe('HexagonalComponent', () => {
  let component: HexagonalComponent;
  let fixture: ComponentFixture<HexagonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
