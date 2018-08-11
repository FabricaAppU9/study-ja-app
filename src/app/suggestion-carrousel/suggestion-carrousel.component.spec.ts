import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCarrouselComponent } from './suggestion-carrousel.component';

describe('SuggestionCarrouselComponent', () => {
  let component: SuggestionCarrouselComponent;
  let fixture: ComponentFixture<SuggestionCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
