import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartIndicatorsPage } from './chart-indicators.page';

describe('ChartIndicatorsPage', () => {
  let component: ChartIndicatorsPage;
  let fixture: ComponentFixture<ChartIndicatorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartIndicatorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartIndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
