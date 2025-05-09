import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseachComponent } from './reseach.component';

describe('ReseachComponent', () => {
  let component: ReseachComponent;
  let fixture: ComponentFixture<ReseachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReseachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
