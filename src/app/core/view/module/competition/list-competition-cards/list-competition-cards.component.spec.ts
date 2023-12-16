import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetitionCardsComponent } from './list-competition-cards.component';

describe('ListCompetitionCardsComponent', () => {
  let component: ListCompetitionCardsComponent;
  let fixture: ComponentFixture<ListCompetitionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCompetitionCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCompetitionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
