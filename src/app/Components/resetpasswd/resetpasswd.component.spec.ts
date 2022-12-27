import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswdComponent } from './resetpasswd.component';

describe('ResetpasswdComponent', () => {
  let component: ResetpasswdComponent;
  let fixture: ComponentFixture<ResetpasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
