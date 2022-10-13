import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPlayerComponent } from './community-player.component';

describe('CommunityPlayerComponent', () => {
  let component: CommunityPlayerComponent;
  let fixture: ComponentFixture<CommunityPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
