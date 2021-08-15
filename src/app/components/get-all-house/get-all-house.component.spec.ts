import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllHouseComponent } from './get-all-house.component';

describe('GetAllHouseComponent', () => {
  let component: GetAllHouseComponent;
  let fixture: ComponentFixture<GetAllHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
