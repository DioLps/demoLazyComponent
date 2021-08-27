import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompsComponent } from './dynamic-comps.component';

describe('DynamicCompsComponent', () => {
  let component: DynamicCompsComponent;
  let fixture: ComponentFixture<DynamicCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCompsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
