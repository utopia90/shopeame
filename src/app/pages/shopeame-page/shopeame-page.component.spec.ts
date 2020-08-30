import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeamePageComponent } from './shopeame-page.component';

describe('ShopeamePageComponent', () => {
  let component: ShopeamePageComponent;
  let fixture: ComponentFixture<ShopeamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
