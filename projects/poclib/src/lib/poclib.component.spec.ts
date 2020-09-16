import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCLibComponent } from './poclib.component';

describe('POCLibComponent', () => {
  let component: POCLibComponent;
  let fixture: ComponentFixture<POCLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POCLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
