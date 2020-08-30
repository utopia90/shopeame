import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeameWelcomeComponent } from './shopeame-welcome.component';

describe('ShopeameWelcomeComponent', () => {
  let component: ShopeameWelcomeComponent;
  let fixture: ComponentFixture<ShopeameWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeameWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeameWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
