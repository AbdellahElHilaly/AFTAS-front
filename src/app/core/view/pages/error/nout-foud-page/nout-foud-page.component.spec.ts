import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutFoudPageComponent } from './nout-foud-page.component';

describe('NoutFoudPageComponent', () => {
  let component: NoutFoudPageComponent;
  let fixture: ComponentFixture<NoutFoudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoutFoudPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoutFoudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
