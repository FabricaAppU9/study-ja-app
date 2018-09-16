import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSendComponent } from './comment-send.component';

describe('CommentSendComponent', () => {
  let component: CommentSendComponent;
  let fixture: ComponentFixture<CommentSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
