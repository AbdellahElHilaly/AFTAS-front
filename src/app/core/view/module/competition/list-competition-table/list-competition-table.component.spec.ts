import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetitionTableComponent } from './list-competition-table.component';

describe('ListCompetitionTableComponent', () => {
  let component: ListCompetitionTableComponent;
  let fixture: ComponentFixture<ListCompetitionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCompetitionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCompetitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
