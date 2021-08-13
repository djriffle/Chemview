import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwodSettingsPage } from './twod-settings.page';

describe('TwodSettingsPage', () => {
  let component: TwodSettingsPage;
  let fixture: ComponentFixture<TwodSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwodSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwodSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
