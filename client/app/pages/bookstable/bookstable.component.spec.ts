import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstableComponent } from './bookstable.component';

describe('BookstableComponent', () => {
  let component: BookstableComponent;
  let fixture: ComponentFixture<BookstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
