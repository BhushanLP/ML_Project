import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelresultComponent } from './modelresult.component';

describe('ModelresultComponent', () => {
  let component: ModelresultComponent;
  let fixture: ComponentFixture<ModelresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
