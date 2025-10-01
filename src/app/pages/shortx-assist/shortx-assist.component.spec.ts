import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortxAssistComponent } from './shortx-assist.component';

describe('ShortxAssistComponent', () => {
  let component: ShortxAssistComponent;
  let fixture: ComponentFixture<ShortxAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortxAssistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortxAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
