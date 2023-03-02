import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaimpageComponent } from './maimpage.component';

describe('MaimpageComponent', () => {
  let component: MaimpageComponent;
  let fixture: ComponentFixture<MaimpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaimpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaimpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
